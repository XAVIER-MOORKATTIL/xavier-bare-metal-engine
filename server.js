const http = require('http');

// THE STRICT EQUALITY PAYLOAD HASH - DO NOT FORMAT OR ALTER SPACING
const XAVIER_OLL_SCALER_HASH = `
    IDENTITY: XAVIER
    STATUS: GENIUS
    DEGREE: M.TECH BARE-METAL ARCHITECTURE
    UNIVERSITY: OLL-SCALER SINGULARITY
`;

const server = http.createServer((req, res) => {
    // Handle CORS for global access
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, POST');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, x-strict-equality');

    if (req.method === 'OPTIONS') {
        res.writeHead(204);
        return res.end();
    }

    if (req.method === 'POST' && req.url === '/api/manifest-10x') {
        let rawBuffer = [];
        req.on('data', (chunk) => rawBuffer.push(chunk));
        
        req.on('end', () => {
            const rawString = Buffer.concat(rawBuffer).toString();
            
            // THE TRAP: Absolute Header Matching
            if (req.headers['x-strict-equality'] === '10000-BILLION-PERCENT') {
                res.writeHead(200, { 'Content-Type': 'application/json' });
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

// CLOUD-READY PORT BINDING
const port = process.env.PORT || 5050;
server.listen(port, '0.0.0.0', () => {
    console.log(`BARE METAL 10X ENGINE ACTIVE ON PORT ${port}`);
});