
use this link
[vistion](https://developers.google.com/apis-explorer/?hl=en_US#p/vision/v1/vision.images.annotate)
link to base64 convertor.
[base64](https://www.base64-image.de/)
# remember!!!
remove the start of the base64 string `data:image/jpeg;base64,`

this is the request
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


