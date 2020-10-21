---
title: "Another Post"
date: 2019-06-17T19:05:51-07:00
draft: false
---

This is the third in a series of boring posts. Checking to see if the Forestry deploy does *not* run when i run my publish script this time.

**Update**: updating this post to see where the HEAD is after setting up the gh-pages branch.
{{< tabs >}}
    {{< tab "Swift" >}}
        {{< highlight "swift" >}}
        UAirship.namedUser().identifier = "NamedUserID"
        {{< /highlight >}}
    {{< /tab >}}

    {{< tab "Obj-c" >}}
        {{< highlight "obj-c" >}}
        [UAirship namedUser].identifier = @"NamedUserID";
        {{< /highlight >}}
    {{< /tab >}}

    {{< tab "Android" >}}
        {{< highlight "java" >}}
        UAirship.shared().getNamedUser().setId("NamedUserID");
        {{< /highlight >}}
    {{< /tab >}}

    {{< tab "Web" >}}
        {{< highlight "js" >}}
        UA.then(function(sdk) {
          sdk.channel.namedUser.set(NamedUserID) // associates this channel with a named user
        });
        {{< /highlight >}}
    {{< /tab >}}

{{< /tabs >}}

## Tabs Shortcode

I made this tab thing from [Marina's comment](https://discourse.gohugo.io/t/code-tabs-widget/975/7)

