var cc=cc||{};cc.barWidth=265;cc.barHeight=25;cc.barColor=[255,255,0,255];cc.barBgColor=[41,41,41,255];cc.bglayerColor=[25,25,25,255];cc.tglogotexture2d=null;cc._loadingImage="data:image/gif;base64,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\x3d";
//cc.tgideasLogo="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAlEAAABKCAYAAACb8gGvAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo0RjhBQjFFOTcwODUxMUU0QTc1MTg1MUE3RTEyODZFRSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo0RjhBQjFFQTcwODUxMUU0QTc1MTg1MUE3RTEyODZFRSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjRGOEFCMUU3NzA4NTExRTRBNzUxODUxQTdFMTI4NkVFIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjRGOEFCMUU4NzA4NTExRTRBNzUxODUxQTdFMTI4NkVFIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+c4A4VAAAEytJREFUeNrsnf1zXFUZ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"
cc._fpsImage="data:image/png;base64,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\x3d";
cc._loadingbar="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQwAAAAZCAYAAADE4BAPAAABcUlEQVR4nO3bsUpcURSF4X8rA8EHMMGnEGxEEVLmNVIFC0sxYKtFgoUkVZr4JoEYAmkF30AQsVMQBpLMtnAax+2MxdzJifxfd9n7wqoWl8s5IEmSJEmS1L6YtJCZc0/Zk/TfSiAjIictPloEw6JYBnaBVWBpavEktWIAnAHHwMeIOB23XBZGZi4A29yVRW/aCSU1J4FrYA84jIg/1dKDwsjMeeAzsNlpPEkt6gOfImKnGt4rjMwM4DXwrftckhp1BbyJiF+jg7ni+d1MIklq1QvgbTWoCmOj8ziSWtYD1qvBaGEAvOo2i6TGBbBYDarCkKRSVRgXM08hqSUJXFaD0cIYAD86jyOpZb+Bn9WgKowvnceR1LI+cFQN7hXG8Cz5MfB1BqEktacPHFVnMKD4hxERf4Et4AN3XxySnr8EboB94P1jS+Mun80DK8OX14CXUw4o6d8bAOfAd+AAOBl3a9Xr7ZKefL1dkiRJkiRJkp6VW+6FRsNvbjMxAAAAAElFTkSuQmCC";
cc._loaderImage="data:image/png;base64,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\x3d\x3d";/*  |xGv00|db3eb8b57f2793cc5e0cb598c66af3cd */
