# **Is Fedora Breaking TOO Much?**
## Introduction
Hi all, welcome back to another post. In today's post I'm going to be discussing the different issues I've had whilst on Fedora, how I fixed or avoided them happening again. Sit tight, this is going to be a long one.

## Issues cropping up
Most of my issues and problems were caused by myself f*cking with my system, but others were caused by apps.
The first issue I'm going to talk about today is system freezing and not doing anything, resulting in having to be forced off and turned back on again. This was caused by the package ```brave-browser-nightly``` which after uninstalling, the system didn't crash anymore.

Next issue is Flatpak, Flatpaks are cool and good (when they work), I was trying to get them to show up in my app launcher (Rofi), but they wouldn't I added the paths it said to $XDG_DATA_DIRS like the flatpak.run cli told me to do everytime I manually ran the apps. This then f*cked my whole system, Rofi only looked in that path, and so ONLY Flatpak apps were shown, no normal dnf installed ones.

Next was KDE Plasma not loading, cause by a segmentation fault for KSplashQML - which I believe was caused by the previous issue (Flatpak one ^). To fix this and the Flatpak issue, I reinstalled Fedora 36 KDE Spin onto my PC and it has worked like a charm since.


## Conclusion
Although most of these issues were caused by me, but the issue caused by Brave was not. Why am I still using Fedora, well, I love it, Fedora fits my workflow perfectly, and that's it. Arch could fit me better but I can't be asked to go through that install at the moment. So Fedora (in my opinion) is still THE BEST Linux distro out there and is well suited for beginners.


<a href="https://linuxgamer.github.io">Back to Home</a>
<br>
<a href="https://linuxgamer.github.io/posts">Back to Posts</a>
