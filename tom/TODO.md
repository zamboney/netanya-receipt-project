
use this link
[vistion](https://developers.google.com/apis-explorer/?hl=en_US#p/vision/v1/vision.images.annotate)


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

you need to 
* convert this reqeust into a readable data that can be use in the DB

