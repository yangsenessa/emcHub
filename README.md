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
    "loginId": "yangsenessa1",
	  "bussData": {
		    "identityType": "PASSWD",
		    "authToken": "123456"
	}
}


res:
{
    "resultCode": "SUCCESS",
    "gmtDate": 1689694933269,
    "loginStatus": "true",
    "bussData": {
        "custId": "1685969357974"
    }
}

NOTE：if resultCode == NEED_LOGONIN, route to /login

#### applyRegister.do
req:
{
    "bussData": {
	"loginId":"essa2",
        "email":"essa2",
        "mobilePhoneNo":"11111",
        "nickName":"essa2"        
	}
}



rsp:
{
    "resultCode": "SUCCESS",
    "gmtDate": 1689695950011,
    "loginStatus": "true",
    "bussData": {
        "loginId": "essa2",
        "nickName": "essa2",
        "custId": "1691659228910"
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
    "custId":"1691659228910",
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
    "gmtDate": 1689698194374,
    "loginStatus": "true",
    "bussData": {
        "model_id": "c0684661-5c2a-40e2-8e55-998334e4822e"
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
     "modelList":[{
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
    "gmtDate": 1689705453613,
    "loginStatus": "true",
    "totalNum": 0,
    "modelInfoList": [],
    "bussData": {
        "modelFileLink": "https://github.com/yangsenessa/emcHub/edit/main/README.md",
        "cateGory1": "new1",
        "negativePromts": "\"aaa\"",
        "cateGory3": "new1",
        "seed": "2",
        "cateGory2": "new1",
        "modelId": "c0684661-5c2a-40e2-8e55-998334e4822e",
        "sampleImgFileLink": "https://github.com/yangsenessa/emcHub/edit/main/README.md",
        "paramsGuideLink": "https://github.com/yangsenessa/emcHub/edit/main/README.md",
        "version": "0.0.1",
        "guideLink": "https://github.com/yangsenessa/emcHub/edit/main/README.md",
        "modelName": "new1",
        "positivePromts": "\"aaa\"",
        "modelSubName": "new1",
        "numInferenceSteps": "2",
        "invokeGuide": "account:@eagelaxis :) Contact me if needed.Discord Account:Eagelaxis#7818Version Choosing Advice:V2f",
        "modelDesc": "account:@eagelaxis :) Contact me if needed.Discord Account:Eagelaxis#7818Version Choosing Advice:V2f",
        "enhancePromts": "aaa",
        "sampleCodeLink": "https://github.com/yangsenessa/emcHub/edit/main/README.md"
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












