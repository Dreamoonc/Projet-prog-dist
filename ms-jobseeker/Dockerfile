# -------- stage 1 : build --------
FROM maven:3.9.5-amazoncorretto-21 AS builder
WORKDIR /app
COPY pom.xml .
COPY src ./src
RUN mvn -B package -DskipTests

# -------- stage 2 : runtime -------
FROM eclipse-temurin:21-jre
WORKDIR /app
ARG JAR_FILE=*.jar
COPY --from=builder /app/target/${JAR_FILE} app.jar
EXPOSE 8080
ENTRYPOINT ["java","-jar","/app/app.jar"]
