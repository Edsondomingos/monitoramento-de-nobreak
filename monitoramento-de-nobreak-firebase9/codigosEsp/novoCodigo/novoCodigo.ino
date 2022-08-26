#include <WiFi.h>
#include <PubSubClient.h>
#include <Wire.h>

const int batInPin = 34;
const int redeInPin = 35;
const int relePin = 4;
float sensorValue = 0; 
float tensao = 0;
float redeValue = 0;
float redeValue2 = 0;
float redeValue3 = 0;
float statusRede = 0;

const char* ssid = "wIFRN-IoT";
const char* password = "deviceiotifrn";
//const char* mqtt_broker = "10.44.1.35";
const char *mqtt_broker = "broker.emqx.io";

const char *mqtt_username = "emqx";
const char *mqtt_password = "public";
const int mqtt_port = 1883;


WiFiClient espClient;
PubSubClient client(espClient);

void setup() {
  Serial.begin(115200);
  pinMode(relePin, OUTPUT);

  setup_wifi();
  client.setServer(mqtt_broker, mqtt_port);
  client.setCallback(callback);
  while (!client.connected()) {
     String client_id = "esp32-client-";
     client_id += String(WiFi.macAddress());
     Serial.printf("The client %s connects to the public mqtt broker\n", client_id.c_str());
     if (client.connect(client_id.c_str(), mqtt_username, mqtt_password)) {
         Serial.println("Public emqx mqtt broker connected");
     } else {
         Serial.print("failed with state ");
         Serial.print(client.state());
         delay(2000);
     }

     }
 // publish and subscribe
 //client.publish(topic, "Hi EMQX I'm ESP32 ^^");
  client.subscribe("nobreak");
}

void setup_wifi() {
  delay(10);
  // We start by connecting to a WiFi network
  Serial.println();
  Serial.print("Connecting to ");
  Serial.println(ssid);

  WiFi.begin(ssid, password);

  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }

  Serial.println("");
  Serial.println("WiFi connected");
  Serial.println("IP address: ");
  Serial.println(WiFi.localIP());
}

void callback(char* topic, byte* message, unsigned int length) {
  Serial.print("Message arrived on topic: ");
  Serial.print(topic);
  Serial.print(". Message: ");
  String messageTemp;
  
  for (int i = 0; i < length; i++) {
    Serial.print((char)message[i]);
    messageTemp += (char)message[i];
  }
  Serial.println();
  
}

void reconnect() {
  // Loop until we're reconnected
  while (!client.connected()) {
    Serial.print("Attempting MQTT connection...");
    // Attempt to connect
    if (client.connect("ESP8266Client")) {
      Serial.println("connected");
      // Subscribe
      client.subscribe("esp32/output");
    } else {
      Serial.print("failed, rc=");
      Serial.print(client.state());
      Serial.println(" try again in 5 seconds");
      // Wait 5 seconds before retrying
      delay(5000);
    }
  }
}

void loop() {
  sensorValue = analogRead(batInPin);
  tensao = sensorValue*13.83/4095 + 0.9;

  if (!client.connected()) {
    reconnect();
    Serial.print("Conexão perdida");
  }
  client.loop();

  char tensaoString[8];
    dtostrf(tensao, 1, 2, tensaoString);
    Serial.print("tensao: ");
    Serial.println(tensaoString);
    client.publish("nobreak", tensaoString);

    delay(1000);

 redeValue = analogRead(redeInPin);
 delay(8); // 8,7ms - meio periodo de uma onda 60hz
 redeValue2 = analogRead(redeInPin);
 delay(8);
 redeValue3 = analogRead(redeInPin);
 if (redeValue > 4000 && redeValue2 > 4000 && redeValue3 > 4000){
    statusRede = 0;
 } else {
    statusRede = 1;
 }
 char redeString[8];
  dtostrf(statusRede, 1, 2, redeString);
  Serial.print("Rede: ");
  Serial.print(statusRede);
  client.publish("rede", redeString);
    
}
