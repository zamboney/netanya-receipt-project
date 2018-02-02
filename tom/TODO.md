
# use this link
[vistion](https://developers.google.com/apis-explorer/?hl=en_US#p/vision/v1/vision.images.annotate)
link to base64 convertor.

[base64](https://www.base64-image.de/)
## remember!!!
remove the start of the base64 string `data:image/jpeg;base64,`

# this is the request
```
{
 "requests": [
  {
   "image": {
    "content": "base64..."
    },
   "features": [
    {
     "type": "DOCUMENT_TEXT_DETECTION"
    }
   ],
   "imageContext": {
    "languageHints": [
     "he"
    ]
   }
  }
 ]
}
```

the flow
* detect the bs name
* convert the data into a readable product prive table


[link to pic](https://firebasestorage.googleapis.com/v0/b/receipt-project-netanya.appspot.com/o/image%2FWhatsApp%20Image%202017-12-26%20at%2009.55.04.jpeg?alt=media&token=f7210d90-cd61-4e79-968a-8db0dd0dc4e0)
