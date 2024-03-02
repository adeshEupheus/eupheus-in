FROM node:18
WORKDIR /app
COPY package.json .
RUN npm install
COPY . ./
ENV DATABASE_URL=postgresql://postgres:YouREAL$229!@eupheus-postgres01.c58v0avrhekb.ap-south-1.rds.amazonaws.com:5432/eupheus-in?schema=public \
    JWT_SECRET_KEY=admin1234!@#$ \
    JWT_LIFETIME=5d \
    PORT=5070 \
    ACCESS_KEY=AKIAVYWPWVE2PTRKKS7N \
    SECRET_KEY=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 \
    RAZORPAY_KEY=rzp_live_38mS0otJVZuNiR \
    RAZORPAY_SECRET=LTN1Zz0FuAzdtlvbubKwlTgr
EXPOSE ${PORT}
CMD [ "npm", "start" ]