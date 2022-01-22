import "dotenv/config"
import {Kafka} from 'kafkajs'

// Create the client with the broker list
async function bootstrap(){
  const kafka = new Kafka({
    brokers: ['localhost:9092'],
  clientId: 'certificate',
  })
  
  
  const producer = kafka.producer()
  
  await producer.connect()
  await producer.send({
    topic: 'certification-response',
    messages: [
      { value: 'Hello KafkaJS user!' },
    ],
  })
  
  await producer.disconnect()
}
 bootstrap().catch(console.error)
