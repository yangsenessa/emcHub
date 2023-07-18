# emcHub
## Inferface Issue
The Base Info -- weak
{
    version:"",
    language:"en" ,-- en zh_CN  zh_TW
}

### For user management
#### userLogin.do

req:
{
    "loginId": "1111",
	  "bussData": {
		    "identityType": "PASSWD",
		    "authToken": "0xa89981988ba"
	}
}

res:
{
    "resultCode": "SUCCESS",
    "loginStatus": "true",
    "bussData": {
        "custId": "00001"
    }
}

NOTE：if resultCode == NEED_LOGONIN, route to /login

#### applyRegister.do
req:
{
    "actionCode": "register",
	  "bussData": {
		    "loginId":"",
        "email":"",
        "mobilePhoneNo":"",
        "nickName":""        
	}
}


rsp:
{
    "resultCode": "SUCCESS",
    "bussData": {
        "custId": "00001"
    }
}


#### setAutoration.do --set password 

req:
{
    "custId":"1685969357974",
    "bussData":{
        "identityType":"PASSWD",
        "authToken":"123456"
    }
}


res:
{
    "resultCode": "SUCCESS",
    "bussData":{}
}

#### addNewModel.do   ---modelBaseInfo First step, need the basic info to construct the model_id.
req:

{
    "custId":"1685969357974",
    "bussData" :{
       "modelName":"",
       "modelSubName":"",
       "category1":"",
       "category2":"",
       "category3":""
    }
}

res:
{
    "resultCode": "SUCCESS",
    "bussData":{
        "modelId":""
    }
}

#### modModelDetailInfo.do 
{
     "custId": "1111",
     "busssData":{
         "modelId":"",
         "version":"",
         "guideLink":"",
         "paramsGuideLink":"",
         "sampleCodeLink":"",
         "invokeGuide":"",
         "positivePromts":"",
         "negativePrompt":"",
         "enhancePromt":"",
         "numInferenceSteps":""
         "seed":"",
         "modelFileLink": "",
         "sampleImgFileLink":""
     }
}
res:
{
     "resultCode": "SUCCESS",
      "bussData":{}    
}
## fileUpload please use MultipartFile and server applicatuon will return like this:
{
     "resultCode": "SUCCESS",
     "file_link":""
}

Note:
The client needs relate "file_link" item and combile them this ',' into modModelDetailInfo.do's "request.bussData.modelFileLink/sampleImgFileLink"  

### queryModelInfoForMainView.do
req：
{
    "custId":"1111",
    "bussData" :{
        pageIndex:0,
        pageSize:10
    }
}
res：
{
    "resultCode": "SUCCESS",
     "totalNum":10，     
     "bussData": {
        "modelList": [{
              "modelName":"",
              "modelSubName":"",
              "category1":"",
              "category2":"",
              "category3":"",
              "sampleImgFileLink"
        },
        {
           ...
        }]     
}

### queryModelDetailInfo.do

req:
{
    "custId":"1111",
    "bussData": {
        "model_id":"77b35362-8914-420b-8648-51c221857d5d"
    }

}

res:

{
     "resultCode": "SUCCESS",
     "bussData": {
         "modelId":"",
         "version":"",
         "guideLink":"",
         "paramsGuideLink":"",
         "sampleCodeLink":"",
         "invokeGuide":"",
         "positivePromts":"",
         "negativePrompt":"",
         "enhancePromt":"",
         "numInferenceSteps":""
         "seed":"",
         "modelFileLink": "",
         "sampleImgFileLink":""
     }
}


### invokeModelWithEmc.do
req:
{
     "custId":"1111",
      "bussData": {
         "model_id":"77b35362-8914-420b-8648-51c221857d5d",
         "positivePromts":"",
         "negativePrompt":"",
         "enhancePromt":"",
         "numInferenceSteps":""
         "seed":"",
         ...
    }
}

res:
{
      "resultCode": "SUCCESS",
      "bussData":{
          "resultLink":""// separare with ','
      }

}












