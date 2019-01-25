import https from 'https';

class rnHttpsAgent {
    constructor()   {

    }

    Agent(options) {
        const agent = new https.Agent(options);
        return agent;
    }
}

module.exports = rnHttpsAgent;