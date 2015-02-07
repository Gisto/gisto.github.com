---

layout: "post"
title: "Gisto enterprise mode"
description: ""
post_title: "All you need to know about working with Gisto on enterprise endpoint"
author: "Gisto team"
image: "/images/enterprise.png"
excerpt_separator: "<!--more-->"

---



In a past few month we've been working hard on GitHub enterprise integration into Gisto as well as few more cool features, but let's leave that for another post.

Instead, let's concentrate on enterprise integration and all that boils down to that.

<!--more-->

Enterprise mode in Gisto allows connecting to your GitHub Enterprise (on-premise) instead of public GitHub.

In both modes you can use the same features, the only thing that changes is the endpoint of connection.

## So how does it works now?

The approach we chosen is to let user select endpoint at the log-in screen, this way you can switch fast between enterprise user and public account.

Enterprise endpoint need to be set ahead (but only once), after that it is saved in the settings.

Just log-in to ether mode, and done. You can easily switch between the modes.  

## What's the difference regarding the features?

To tell the truth I was thinking there will be much more differences and we'll have to cut out some features. 
Fortunately relatively small portion of Gisto functionality was disabled in "Enterprise mode".

## Gisto in "Enterprise mode" can be totally independent 

Ye can even run gist sharing notification server from your own server if you want. Detailed instruction is available in
   [Documentation](/documentation) section.

