---
title: "Web Push"
date: 2019-06-21T08:09:57-07:00
lastmod: 2019-06-21T08:09:57-07:00
draft: false
description: "Trying out web push things."
weight: 5
---

{{< highlight "javascript" >}}

// These are some handy things you can do with Web Notify in the browser console.

// Check if the channel is opted in
UA.then(sdk => console.log(sdk.channel.optedIn))

// opt out. you must re-register after
UA.then(sdk => console.log(sdk.channel.optOut()))

// re-register. If you unregister for some reason, the browser won't give you the opt-in dialog again, so register the channel with the register method.
UA.then(sdk => console.log(sdk.register()))

// add tag
UA.then(sdk => console.log(sdk.channel.tags.add("avocado")))

// Get channel id
UASDK.then(sdk => console.log(sdk.channel.id))

// List tags
UA.then(sdk => console.log(sdk.channel.tags.list))

// checks to see if it has the tag
UA.then(sdk => console.log(sdk.channel.tags.has("avocado")))

// set named user
UA.then(sdk => console.log(sdk.channel.namedUser.set("pfd")))

// get named user
UA.then(sdk => console.log(sdk.channel.namedUser.id))

// get the name of the Custom Event
UA.then(sdk => console.log(sdk.CustomEvent.name))

// creates a new Consumed Content event using the template, with a value, a key/value, and an id, then tracks it
UA.then(sdk => {
  new sdk.CustomEvent.templates.media.ConsumedContentEvent(23, {a: 1}, '2234234').track()
})
{{< /highlight >}}
