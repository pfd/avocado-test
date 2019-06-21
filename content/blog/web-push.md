---
title: "Web Push"
date: 2019-06-21T08:09:57-07:00
lastmod: 2019-06-21T08:09:57-07:00
draft: false
description: "Trying out web push things."
weight: 5
---

{{< highlight "javascript" >}}

// These are some handy things you can do with Web Notify in the browser. Note that
// urbanairship.com uses the UASDK namespace

// Testing Web Push in the console

// Check if the channel is opted in
UA.then(sdk => console.log(sdk.channel.optedIn))

// re-register
UA.then(sdk => console.log(sdk.register()))

// opt out. you must re-register after
UA.then(sdk => console.log(sdk.channel.optOut()))

// add tag
UA.then(sdk => console.log(sdk.channel.tags.add("happy-hour")))

// Get channel id
UASDK.then(sdk => console.log(sdk.channel.id))

// List tags
UA.then(sdk => console.log(sdk.channel.tags.list))

// checks to see if it has the tag
UA.then(sdk => console.log(sdk.channel.tags.has("herp")))

// set named user
UA.then(sdk => console.log(sdk.channel.namedUser.set("pfd")))

// get named user
UA.then(sdk => console.log(sdk.channel.namedUser.id))

// ua.com uses the UASDK namespace
UASDK.then(sdk => console.log(sdk.channel.namedUser.id))

// get the name of the Custom Event
UA.then(sdk => console.log(sdk.CustomEvent.name))

// creates a new Consumed Content event using the template, with a value, a key/value, and an id, then tracks it
UA.then(sdk => {
  new sdk.CustomEvent.templates.media.ConsumedContentEvent(23, {a: 1}, '2234234').track()
})
{{< /highlight >}}
