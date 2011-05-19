# GoThere

GoThere is the ultimate office prank. It is a Chrome extension that allows users who have it installed to open web pages on the computer of any other user. We disguised the extension well enough so that even a developer (the primary target) wouldn't be able to find it without some serious tinkering. It was designed with fun in mind, so once a victim *does* find it, they're given the opportunity to play.

If you're just interested in trying it out, [install the extension](http://gotherehack.com/plugin.crx) and click on the options page for Adobe Flash.

## Server

The GoThere server runs on Node. Most of the heavy lifting is done by Now.js.

## Chrome Extension

The Chrome extension uses a background page to keep a connection open with the Node server for receiving commands. It includes an options page that holds the control panel and details of using/installing the extension. Also, it looks like Adobe Flash, so only the most perceptive victim will notice it's there.

## Vagrant

We developed this using Vagrant and have included our Vagrantfile and bash provision script. There are several places in the extension where gotherehack.com is hardcoded so if you want to do local development you'll have to add an entry to your hosts file to point that to localhost.

## Quality

The quality of this code is questionable. It was developed in a hurry and just for fun, so please don't have too high of expectations for its stability, portability, readability or scalability.
