Derek Sivers
What I’m doing now
(This is a now page, and if you have your own site, you should make one, too.)
Updated September 14th, 2026, from my home in the woods in New Zealand, where a cold wet winter is finally turning to a chilly wet spring.

My current tools are at /uses.

from India to Türkiye to China
Got back from Bangalore a few weeks ago, and I miss my friends and social life there.

In October I to go Istanbul, and in November I go to China with Kevin Kelly for a train trip from Beijing to Hong Kong.

boy becomes a man
Different cultures have their rite of passage where a boy becomes a man. For my son, it happened in July when he flew by himself from Wellington to Auckland to Singapore, as an adult, doing immigration and everything. I met him at Changi airport. We spent two weeks of his school holidays traveling, then he flew back to Wellington by himself.

Feels like a lot of my job of raising him is done. My role has changed from manager to consultant. He’s also yearning to go out into the world - to go to boarding school or something. He loves New Zealand but wants to inhabit other cultures.

sick of new bot spam
Every day I get 5-10 emails that look real at first: “Hi Derek. I’ve been following your work for a long time. From CD Baby to How to Live, I admire the way you look at the world with a unique angle. I’ve started a new project (or my son is sick, or I’m doing an experiment) and all I need is €10...”

The other variation is saying they want just one sentence of advice. What is the one thing they need to know to be successful in life? What is the one thing that I wish I would have told my younger self?

I’m extra annoyed if these are actual real people with good intentions, not realizing they are being shitty spammers, making the world worse.

new servers and sysadmin
I love the low-level server sysadmin, tweaking OS and network things in the console. It’s so beautifully hype-free, closer to science than business.

I moved sive.rs, NowNowNow.com, MusicThoughts.com, and the rest of my sites (and email and Git and such) from a 4-year-old server in NYC to a new OpenBSD server at LAX. It was nice to start anew since the old server had accumulated some cruft. I do this with my home PC often: erase the hard drive, install a new OS from scratch, restoring only what I need from backup.

Along the way I revisit old config files and see what I can improve. Like this time I switched all my TLS certificates from LetsEncrypt’s tool to OpenBSD’s acme-client, making the “www.” prefix an alias instead of separate cert. Also improved nginx.conf and sshd_config, hardening.

I achieved tech independence with my DNS! I set up my own private NSD server, and made it a hidden master. It was such a joy to learn about and make it work. DNS is underrated.

interviews paused indefinitely
I’ve been on over 250 podcasts, and spent hundreds of hours editing the transcripts to make them as accurate as can be, so no one has to listen to 500+ hours of me talking. You or a computer can read, search, or query the transcripts. But I’m going to stop doing podcasts for a while so I have all new stuff to talk about.

programming
I’m enjoying a re-think and re-structure of all of my past code, doing even more inside of PostgreSQL. I’m in that phase where I do it until I fall asleep at night, then bounce out of bed at 5am to get right back to it. Doing Go for my first time.

I wrote a Mustache template parser in PostgreSQL, so now I can save my HTML templates in PostgreSQL, and call a single function with the minimum variable - like an HTTP cookie - and it will return the HTTP headers and HTML body, ready to return to the browser. It’s very simple and very exciting.

public code
Finally sharing my main code, which you can see at:

codeberg.org/sivers/sivers
github.com/sivers/sivers
or gitlab.com/sivers/sivers
Migrating it in from an old non-Git directory, so it will appear piece by piece.
