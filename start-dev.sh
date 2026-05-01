#!/bin/bash

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

echo -e "${BLUE}🚀 Starting VCHUKI Development Environment${NC}"
echo "=================================================="

# Function to check if a service is running
check_service() {
    local url=$1
    local service_name=$2
    local max_attempts=30
    local attempt=1

    echo -e "${YELLOW}⏳ Waiting for $service_name to start...${NC}"
    
    while [ $attempt -le $max_attempts ]; do
        if curl -s "$url" > /dev/null 2>&1; then
            echo -e "${GREEN}✅ $service_name is ready!${NC}"
            return 0
        fi
        echo -n "."
        sleep 2
        ((attempt++))
    done
    
    echo -e "${RED}❌ $service_name failed to start after $((max_attempts * 2)) seconds${NC}"
    return 1
}

# Step 1: Start Database
echo -e "${BLUE}📦 Step 1: Starting MongoDB Database...${NC}"
docker-compose up -d
if [ $? -eq 0 ]; then
    echo -e "${GREEN}✅ Database container started${NC}"
    # Wait for MongoDB to be ready
    echo -e "${YELLOW}⏳ Waiting for MongoDB to initialize...${NC}"
    sleep 10
else
    echo -e "${RED}❌ Failed to start database${NC}"
    exit 1
fi

# Step 2: Start Backend
echo -e "${BLUE}🔧 Step 2: Starting Backend Server...${NC}"
cd backend
PORT=5001 npm run dev &
BACKEND_PID=$!
cd ..

# Wait for backend to be ready
if check_service "http://localhost:5001/health" "Backend API"; then
    echo -e "${GREEN}🔗 Backend running at: http://localhost:5001${NC}"
    echo -e "${GREEN}📚 API Docs at: http://localhost:5001/api-docs${NC}"
else
    echo -e "${RED}❌ Backend failed to start${NC}"
    kill $BACKEND_PID 2>/dev/null
    docker-compose down
    exit 1
fi

# Step 3: Start Frontend
echo -e "${BLUE}🎨 Step 3: Starting Frontend Application...${NC}"
cd frontend
npm run dev &
FRONTEND_PID=$!
cd ..

# Wait for frontend to be ready
if check_service "http://localhost:3000" "Frontend App"; then
    echo -e "${GREEN}🌐 Frontend running at: http://localhost:3000${NC}"
else
    echo -e "${YELLOW}⚠️  Frontend may still be starting up...${NC}"
fi

echo ""
echo -e "${GREEN}🎉 VCHUKI Development Environment Ready!${NC}"
echo "=================================================="
echo -e "${GREEN}🌐 Frontend:${NC} http://localhost:3000"
echo -e "${GREEN}🔗 Backend API:${NC} http://localhost:5001"
echo -e "${GREEN}📚 API Documentation:${NC} http://localhost:5001/api-docs"
echo -e "${GREEN}🗄️  Database:${NC} MongoDB running in Docker"
echo ""
echo -e "${YELLOW}💡 To stop all services, press Ctrl+C or run: npm run stop${NC}"
echo ""

# Keep the script running and handle cleanup on exit
cleanup() {
    echo -e "\n${YELLOW}🛑 Shutting down services...${NC}"
    kill $BACKEND_PID 2>/dev/null
    kill $FRONTEND_PID 2>/dev/null
    docker-compose down
    echo -e "${GREEN}✅ All services stopped${NC}"
    exit 0
}

trap cleanup SIGINT SIGTERM

# Wait for background processes
wait