# ---------- Stage 1: Build the WAR ----------
FROM maven:latest AS builder

WORKDIR /app

# Copy pom and source code
COPY pom.xml ./
COPY src ./src

# Build the WAR
RUN mvn clean package -DskipTests

# ---------- Stage 2: Run with Tomcat ----------
FROM tomcat:10.1-jdk21

# Remove default ROOT app
RUN rm -rf /usr/local/tomcat/webapps/ROOT

# Copy the WAR from the builder stage
COPY --from=builder /app/target/*.war /usr/local/tomcat/webapps/ROOT.war

# Expose Tomcat port
EXPOSE 8080

# Start Tomcat
CMD ["catalina.sh", "run"]
