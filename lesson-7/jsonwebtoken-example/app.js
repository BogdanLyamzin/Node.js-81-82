import jwt from "jsonwebtoken";
import "dotenv/config";

const {JWT_SECRET} = process.env;

const payload = {
    id: "65243ba95239bdc2e69ecf0d"
}

const token = jwt.sign(payload, JWT_SECRET, {expiresIn: "23h"});
// console.log(token);

const decodeToken = jwt.decode(token);
// console.log(decodeToken)

try {
    const {id} = jwt.verify(token, JWT_SECRET);
    // console.log(id)
    const invalidToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1MjQzYmE5NTIzOWJkYzJlNjllY2YwZCIsImlhdCI6MTY5Njg3NDEzNywiZXhwIjoxNjk2OTU2OTM3fQ.jJgjiaQBhQnMXeUYsSqtlEbEi5-hrzAV4Y3gunIk53O";
    jwt.verify(invalidToken, JWT_SECRET);
}
catch(error) {
    console.log(error.message);
}