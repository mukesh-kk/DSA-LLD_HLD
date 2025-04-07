
function rateLimiter(rateWindowInMs,rateLimit){
    const RATE_LIMIT = {
        capacity: 100,              // Max tokens in the bucket
        refillRate: 100 / (15 * 60 * 1000), // 100 tokens per 15 mins
      };
      mp={}
    return function(req,res,next){

        const ip=req.ip
        const  now =Date.now()
        if (!mp [ip]){
            mp[ip]={
                tokens:RATE_LIMIT.capacity,
                lastRefill:now
            }
        }
        const timeElapsed=now-mp[ip].lastRefill

        const tokensToAdd=RATE_LIMIT.refillRate*timeElapsed

        mp[ip].tokens=Math.min(RATE_LIMIT.capacity,mp[ip].tokens+tokensToAdd)
        mp[ip].lastRefill=now

        if(mp[ip].tokens>=1){
            mp[ip].tokens-=1
            next()
        }else{
        return res.status(429).json({ message: 'Too many requests. Try again later.' });
        }

    }
}

module.exports={rateLimiter}