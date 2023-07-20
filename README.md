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
         "modelId":"",   //not null
         "version":"",   //not null
	 "modelFileNames",//noe null
         "modelFileLinks": "",  //not null
         "sampleImgFileLinks":"" , //null
	 "modelFileHashCodes""", //split by ',' and matchs strickly with fileName sequence
	 ...                     //you can add key as your need
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
        "modelId":"77b35362-8914-420b-8648-51c221857d5d",
	"version":""
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
        "modelFileLinks": "https://github.com/yangsenessa/emcHub/edit/main/README.md",
	"modelFileNames":"", //split by ','
        "sampleImgFileLinks": "https://github.com/yangsenessa/emcHub/edit/main/README.md", //split by ',' and matchs strickly with fileName sequence
	"modelFileHashCodes""", //split by ',' and matchs strickly with fileName sequence
        "version": "0.0.1",
	
        ...     //extend key which you already upload 
    }
}

### queryModelInfoByModelFileHashCode.do
req :{
    "hashCode" :""
}

rsp: {
      "resultCode": "SUCCESS",
      bussData:{
          "modelId":"",
          "modelName":"",
          "modelSubName":"",
          "ownerCustId":"",
          "ownerPrincipleId" :""
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












