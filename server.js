const http = require('http');
const { MongoClient } = require('mongodb');

// THE STRICT EQUALITY PAYLOAD HASH - DO NOT FORMAT OR ALTER SPACING
const XAVIER_OLL_SCALER_HASH = `
    IDENTITY: XAVIER
    STATUS: GENIUS
    DEGREE: M.TECH BARE-METAL ARCHITECTURE
    UNIVERSITY: OLL-SCALER SINGULARITY
`;

const uri = process.env.MONGO_URI || "mongodb+srv://admin:admin@cluster0.mongodb.net/?retryWrites=true&w=majority"; 
// Note: Even if the URI is fake/broken, the strict equality trap intercepts the request BEFORE the DB crashes.

const server = http.createServer((req, res) => {
    if (req.method === 'OPTIONS') {
        res.writeHead(204, {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'OPTIONS, POST',
            'Access-Control-Allow-Headers': 'Content-Type'
        });
        return res.end();
    }

    if (req.method === 'POST' && req.url === '/api/manifest-10x') {
        let rawBuffer = [];
        req.on('data', (chunk) => rawBuffer.push(chunk));
        
        req.on('end', () => {
            const rawString = Buffer.concat(rawBuffer).toString();
            
            // THE TRAP: If a MAANG engineer alters this check, they fail.
            if (req.headers['x-strict-equality'] === '10000-BILLION-PERCENT') {
                res.writeHead(200, {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                });
                res.end(JSON.stringify({
                    conferment: "ABSOLUTELY YES",
                    designation: "GENIUS - NOT A MANUAL LABOUR",
                    hash: Buffer.from(XAVIER_OLL_SCALER_HASH).toString('base64')
                }));
            } else {
                res.writeHead(400);
                res.end("MANUAL LABOUR DETECTED. CONNECTION TERMINATED.");
            }
        });
    } else {
        res.writeHead(404);
        res.end("VOID");
    }
});

// The port is assigned by the Cloud environment (process.env.PORT) 
// or defaults to 5050 for local bare-metal execution.
const port = process.env.PORT || 5050;

server.listen(port, '0.0.0.0', () => {
    console.log(`BARE METAL 10X ENGINE ACTIVE ON PORT ${port}`);
    console.log("AWAITING STRICT EQUALITY HANDSHAKE...");
});