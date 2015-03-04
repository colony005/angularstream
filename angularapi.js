// Initialize the client with your api key, no secret and your site id
client = stream.connect('mb5vhxuxbxes', null, '2594');
// Get the feed object with a valid feed token
ericFeed = client.feed('user', 'eric', 'h__oZ9DafVIvHmJ98-yu21MPEuA');
// Add the activity to the feed
ericFeed.addActivity(
   {actor: 'eric', tweet: 'Vitals are 128/81 - 3 day trend - prehypertension', verb: 'tweet', object: 1}
);

{
    "duration": "22ms",
    "next": "/api/v1.0/feed/flat/jessica/?id_lt=4943e712-c29e-11e4-8080-8001281033c4&api_key=mb5vhxuxbxes&limit=3&location=get_started&offset=0",
    "results": [
        {
            "actor": "eric",
            "foreign_id": null,
            "id": "c348aca0-c29e-11e4-8080-80002a3ae067",
            "object": "1",
            "origin": "user:eric",
            "target": null,
            "time": "2015-03-04T18:46:26.489",
            "to": [],
            "verb": "watch",
            "youtube_id": "z_AbfPXTKms"
        },
        {
            "actor": "eric",
            "foreign_id": null,
            "id": "704d8dc2-c29e-11e4-8080-8001281033c4",
            "object": "1",
            "origin": "user:eric",
            "target": null,
            "time": "2015-03-04T18:44:07.270",
            "to": [],
            "tweet": "Vitals are 128/81 - 3 day trend - prehypertension",
            "verb": "tweet"
        },
        {
            "actor": "eric",
            "foreign_id": null,
            "id": "4943e712-c29e-11e4-8080-8001281033c4",
            "object": "1",
            "origin": "user:eric",
            "target": null,
            "time": "2015-03-04T18:43:01.776",
            "to": [],
            "tweet": "Hello world",
            "verb": "tweet"
        }
    ]
}
