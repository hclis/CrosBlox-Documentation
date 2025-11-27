---
title: Setting up Wine
description: A guide to setting up Wine
---

Setting up Wine can be tricky sometimes, so here is a fairly simple guide for that.

## Enabling the 32-bit Repo

Roblox still uses some 32-bit components which is why we will need the repo. Add it using:

```bash
sudo dpkg --add-architecture i386
````

## Adding the WineHQ Repo

First, you will need to add the WineHQ Repository key:

```bash
sudo mkdir -pm755 /etc/apt/keyrings
wget -O - https://dl.winehq.org/wine-builds/winehq.key | sudo gpg --dearmor -o /etc/apt/keyrings/winehq-archive.key -
```

Next, add the sources file:

```bash
sudo wget -NP /etc/apt/sources.list.d/ https://dl.winehq.org/wine-builds/debian/dists/bookworm/winehq-bookworm.sources
```

Now update your package information:

```bash
sudo apt update
```

Finally, install Wine & mandatory add-ons:

```bash
sudo apt install --install-recommends winehq-stable winetricks -y
```
