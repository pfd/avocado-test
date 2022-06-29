
---
title: "Documentation"
linkTitle: "Documentation"
weight: 20
menu:
  main:
    weight: 20
---

{{% pageinfo %}}
Fuck the po po
{{% /pageinfo %}}

## Setup

When updating the submodule, use

```
git submodule update --init --recursive --depth 1
```

if you have trouble, because the theme has two embedded modules.

## Deploy

This site is deployed via GitHub pages (for free!) using a publish script based on [this Hugo tutorial](https://gohugo.io/hosting-and-deployment/hosting-on-github/#github-project-pages).


## Get that Push

<div>
    <!-- Web Notify button -->
    <button id="register">Sign up for notifications</button>
    <script>
        document.getElementById('register').addEventListener('click', function () {
            UA.then(function (sdk) {
                sdk.register()
            })
        })
    </script>
</div>


