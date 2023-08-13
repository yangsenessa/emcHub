# emcHub
## MODEINFO

modelId: 模型id,由系统生成

modelName:模型名称

modelSubName:模型二级名称，展示在grid形式模型名称下面的摘要描述

ownerCustId:模型拥有者

mannerCustID:模型审核者

category1:模型已经分类:checkpoint,lora

category2:模型style,如 BASEMODEL,PHOTORELISTIIC

category3:检索预留


## modeilDetailInfo

以下为强字段，后面可以按需累加其他字段

modelId： 模型名称

version: 模型版本

modelFileNames：模型文件名称，','分割

modelFileLinks： 模型文件下载链接，‘，’分隔，严格按名称顺序匹配

sampleImgFileLinks：模型样例图下载链接 ‘，’分隔，严格按名称顺序匹配

modelFileHashCodes：模型短hash值， ‘，’分隔，严格按名称顺序匹配




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
              "sampleImgFileLinks"
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
    "modelHashCode" :""
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

### mannerModelPublish.do 模型审批
req：
{
    "custId":"1111",
    "bussData": {
        "modelId":"77b35362-8914-420b-8648-51c221857d5d",
	"reviewResCode":"",           // ACCEPT/REFUSE
	"reviewIssue":""
    }

}
rsp:
{
      "resultCode": "SUCCESS",
      "bussData":{
      }
}

### queryModelInfoByCustId.do   依据用户号查询模型基础信息
req:
{
 "custId":"1111",
    "bussData": {
        "modelId":"77b35362-8914-420b-8648-51c221857d5d",
	 "ownerCustId":"",
	  pageIndex:0,
          pageSize:10
    }
}

rsp:
{
     "resultCode": "SUCCESS",
      "modelList":[{
              "modelName":"",
              "modelSubName":"",
              "category1":"",
              "category2":"",
              "category3":"",
              "sampleImgFileLinks"
        },
        {
           ...
        }] ,
	  "bussData": {
      }

}

### authoriseUserToSuper.do 授权用户为超级用户

req:
{
 "custId":"1693572980159",
    "bussData": {
    }
}

rsp:

rsp:
{
     "resultCode": "SUCCESS"

}

### queryModelInfoListForReview.do 模型列表-审核视图

req：

{"custId":"1693572980159",
   "bussData" :{
        "pageIndex":0,
        "pageSize":10
    }
   
}

rsp：

{
    "resultCode": "SUCCESS",
    "gmtDate": 1691510425874,
    "loginStatus": "true",
    "totalNum": 46,
    "modelInfoList": [
        {
            "modelId": "03f0cae2-e8f5-4d68-888a-beaad9fcc7f3",
            "modelName": "Animix Reality",
            "modelSubName": "CARTOON,FANTASY,ARCHITECTURE,BUILDINGS",
            "ownerCustId": "1689660478517",
            "mannerUserId": null,
            "modelKey": null,
            "cateGory1": "CHECKPOINT",
            "cateGory2": null,
            "cateGory3": null,
            "sampleImgFileLinks": "https://res.emchub.ai/emcbucket/2023/07/24/%5B1690218136698%5D00074-4260756657-watercolor%2C%20Anders%20Zorn%2C%20John%20Singer%20Sargent%2C%20Elsa%2C%20sorceress%20studying%2C%20moody%20lighting%2C%20tranquil%2C%20calm%2C%20glow%2C%20glowing%2C%20mystical%2C.png",
            "modelStat": "SUBMIT"
        },
        {
            "modelId": "072e6e4f-35f8-41a4-bde6-22dc25407a52",
            "modelName": "StingerMix",
            "modelSubName": "PERSON",
            "ownerCustId": "1689660478517",
            "mannerUserId": null,
            "modelKey": null,
            "cateGory1": "CHECKPOINT",
            "cateGory2": null,
            "cateGory3": null,
            "sampleImgFileLinks": null,
            "modelStat": "SUBMIT"
        },
        {
            "modelId": "098445b4-8ce8-4da2-a076-278800183602",
            "modelName": "Wonderland",
            "modelSubName": "BACKGROUND,FANTASY,GAME,CONCEPT",
            "ownerCustId": "1690844961565",
            "mannerUserId": null,
            "modelKey": null,
            "cateGory1": "CHECKPOINT",
            "cateGory2": null,
            "cateGory3": null,
            "sampleImgFileLinks": "https://res.emchub.ai/emcbucket/2023/07/24/%5B1690193608795%5D7-1.png",
            "modelStat": "SUBMIT"
        },
        {
            "modelId": "108354ab-307e-4c30-883a-981067838ca0",
            "modelName": "Retro Adventure",
            "modelSubName": "BUILDINGS,LANDSCAPES,3D,ARCHITECTURE,GAME",
            "ownerCustId": "1690844961565",
            "mannerUserId": null,
            "modelKey": null,
            "cateGory1": "CHECKPOINT",
            "cateGory2": null,
            "cateGory3": null,
            "sampleImgFileLinks": "https://res.emchub.ai/emcbucket/2023/07/24/%5B1690191367422%5D4-1.png",
            "modelStat": "SUBMIT"
        },
        {
            "modelId": "153998e2-3ca5-49f1-94f0-9437f35800d3",
            "modelName": "Urban Elegance",
            "modelSubName": "HIGHLY,DETAILED",
            "ownerCustId": "1689313437488",
            "mannerUserId": null,
            "modelKey": null,
            "cateGory1": "CHECKPOINT",
            "cateGory2": null,
            "cateGory3": null,
            "sampleImgFileLinks": null,
            "modelStat": "SUBMIT"
        },
        {
            "modelId": "17b7782b-dbf1-4805-95a0-1f8945d82d20",
            "modelName": "Spomenik",
            "modelSubName": "ARCHITECTURE,LANDSCAPES,BUILDINGS",
            "ownerCustId": "1689313437488",
            "mannerUserId": null,
            "modelKey": null,
            "cateGory1": "LORA",
            "cateGory2": null,
            "cateGory3": null,
            "sampleImgFileLinks": "https://res.emchub.ai/emcbucket/2023/07/28/%5B1690515531858%5D13972-2806335496-masterpiece%2Cbest%20quality%2C_RAW%20photo%2C_subject_%2C8k%20uhd%2Cdslr%2Csoft%20lighting%2Chigh%20quality%2Cfilm%20grain%2CFujifilm%20XT3%2C_megastructure%2Csimp.jpeg",
            "modelStat": "SUBMIT"
        },
        {
            "modelId": "17e81c9d-a992-4af5-8c38-55f6ea9bf2ed",
            "modelName": "Animix Reality",
            "modelSubName": "SPACE,VINTAGE,NATURE,BUILDINGS ",
            "ownerCustId": "1689660478517",
            "mannerUserId": null,
            "modelKey": null,
            "cateGory1": "CHECKPOINT",
            "cateGory2": null,
            "cateGory3": null,
            "sampleImgFileLinks": null,
            "modelStat": "SUBMIT"
        },
        {
            "modelId": "1989f26f-d341-4620-a895-010167bd9c5b",
            "modelName": "Bubblegum Cutie",
            "modelSubName": "GIRL,ANIME,CARTOON,CHARACTER ",
            "ownerCustId": "1689660478517",
            "mannerUserId": null,
            "modelKey": null,
            "cateGory1": "CHECKPOINT",
            "cateGory2": null,
            "cateGory3": null,
            "sampleImgFileLinks": null,
            "modelStat": "SUBMIT"
        },
        {
            "modelId": "1e0fa975-8fed-429b-a652-d568cef59fe1",
            "modelName": "Dreamy Princess",
            "modelSubName": "CHARACTER,GIRL,3D,CARTOON",
            "ownerCustId": "1690844961565",
            "mannerUserId": null,
            "modelKey": null,
            "cateGory1": "CHECKPOINT",
            "cateGory2": null,
            "cateGory3": null,
            "sampleImgFileLinks": "https://res.emchub.ai/emcbucket/2023/07/24/%5B1690184894294%5D1-1.png",
            "modelStat": "SUBMIT"
        },
        {
            "modelId": "283e6504-48b8-45be-b723-933aa77d7816",
            "modelName": "CyberSoldier",
            "modelSubName": "PERSON",
            "ownerCustId": "1689313437488",
            "mannerUserId": null,
            "modelKey": null,
            "cateGory1": "LORA",
            "cateGory2": null,
            "cateGory3": null,
            "sampleImgFileLinks": "https://res.emchub.ai/emcbucket/2023/07/26/%5B1690367874453%5D1383784514-absurdres%2C%20highres%2C%20ultra%20detailed%2C%20Ultra-precise%20depiction%2C%20Ultra-detailed%20depiction%2C%20%EF%BC%88colorful_1.1%29%2C%28pov_1.05%29%2C%28%28masterpiece%29%29.png",
            "modelStat": "SUBMIT"
        }
    ],
    "bussData": {}
}


### submitModel.do  用户提交模型

req:

{
    "custId":"1689660478517",
    "bussData": {
        "modelId":"03f0cae2-e8f5-4d68-888a-beaad9fcc7f3"
    }

}


rsp:

{
    "resultCode": "SUCCESS",
    "gmtDate": 1691512928769,
    "loginStatus": "true",
    "totalNum": 0,
    "modelInfoList": [],
    "bussData": {}
}

### fuzzyRequest.do 模型模糊查询接口

查询规则：

titlePattern：文本信息模糊查询因子

categroyPattern：分类信息模糊查询因子

tagPattern：tag信息模糊查询因子

modelStat：模型状态信息查询因子（非模糊查询）

叠加规则：

1、单因子查询

2、titlePattern+categroyPattern+tagPattern 三个因子叠加混合查询


req:

{"custId":"1693572980159",

    "titlePattern":"Dream",
    "categroyPattern":"",
    "tagPattern":"",
    "modelStat":"",
   "bussData" :{
        "pageIndex":0,
        "pageSize":10
    }
    
}

rsp:

{
    "resultCode": "SUCCESS",
    "gmtDate": 1691935539415,
    "loginStatus": "true",
    "totalNum": 0,
    "modelInfoList": [
        {
            "modelId": "1e0fa975-8fed-429b-a652-d568cef59fe1",
            "modelName": "Dreamy Princess",
            "modelSubName": "CHARACTER,GIRL,3D,CARTOON",
            "ownerCustId": "1690844961565",
            "mannerUserId": "1693572980159",
            "modelKey": null,
            "cateGory1": "CHECKPOINT",
            "cateGory2": null,
            "cateGory3": null,
            "sampleImgFileLinks": null,
            "modelStat": "PUBLISH"
        },
        {
            "modelId": "2a15df2a-4581-44c3-af48-f040963c3dcc",
            "modelName": "Children's Dream",
            "modelSubName": "CONCEPT,ARCHITECTURE",
            "ownerCustId": "1689313437488",
            "mannerUserId": null,
            "modelKey": null,
            "cateGory1": "LORA",
            "cateGory2": null,
            "cateGory3": null,
            "sampleImgFileLinks": null,
            "modelStat": "SUBMIT"
        },
        {
            "modelId": "4ab22a50-aa37-4b90-a91e-b9644e8df957",
            "modelName": "DreamWeaver",
            "modelSubName": "GIRL",
            "ownerCustId": "1689332022379",
            "mannerUserId": "1693572980159",
            "modelKey": null,
            "cateGory1": "LORA",
            "cateGory2": null,
            "cateGory3": null,
            "sampleImgFileLinks": null,
            "modelStat": "PUBLISH"
        },
        {
            "modelId": "58813766-2323-4386-8187-cebcad6085f5",
            "modelName": "Dream Weaver",
            "modelSubName": "GIRL",
            "ownerCustId": "1689313437488",
            "mannerUserId": null,
            "modelKey": null,
            "cateGory1": "LORA",
            "cateGory2": null,
            "cateGory3": null,
            "sampleImgFileLinks": null,
            "modelStat": "SUBMIT"
        },
        {
            "modelId": "8da0a8f7-434a-4eda-9555-0de319162521",
            "modelName": "DreamSewer",
            "modelSubName": "GIRL",
            "ownerCustId": "1689313437488",
            "mannerUserId": null,
            "modelKey": null,
            "cateGory1": "LORA",
            "cateGory2": null,
            "cateGory3": null,
            "sampleImgFileLinks": null,
            "modelStat": "SUBMIT"
        }
    ],
    "bussData": {}
}















