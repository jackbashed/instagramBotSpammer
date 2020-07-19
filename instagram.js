const puppeteer = require('puppeteer');
var text ="";
var pass ="";
var email ="";




var tags = ["rich","money","billionare","millionare", "moneymoneymoney", "wealth", "investing", "stocks",
  "instagram","iphoneography","iphonesia","photooftheday","iphone","iphoneonly","instagood","jj","iphone4","ig","sky","igers","love","instagramhub","instamood","popular","bestoftheday","cat","tweegram","cute","dog","sunset","picoftheday"," ","photography","clouds","igdaily","nature","webstagram","food","me","jj_forum","girl","10likes","instadaily","nofilter","sun","beach","20likes","instagramers","flower","christmas","tree","statigram","beautiful","art","blue","blackandwhite","ignation"," ","popularpage","instago","summer","photo","bw","30likes","trees","red","earlybird","igersmanila","gang_family","green","light","teg","streetphotography","fashion","nyc","iphonography","iphonegraphy","baby","happy","iphone4s","flowers","sea","pink"," ","night","iphonephotography","pretty","petstagram","music","street","smile","japan","igaddict","50likes","15likes","fun","winter","friends","architecture","cloud","white","40likes","foodporn","black","gmy","puppy","hdr","funny","color","city","hipstamatic"," ","tattoo","iphonephotography","bestfriends","chocolate","instagrammers","i","color","city","dinner","friend","street","birthday","followback","yellow","boyfriend","japan","streetphotography","igersmanila","london","hipstamatic","architecture","swedish","throwback","old","delicious"," ","febphotoaday","instagramer","lips","instafamous","beer","1model","winter","goods","day","cake","travel","cloud","the","drawing","earlybird","orange","purple","teg","lovely","sunshine","face","instaphoto","thailand","tired","building"," ","crazy","kids","graffiti","15likes","icecream","italy","sunrise","drink","lake","photoadayapril","sunglasses","shoutout","colorful","instapic","brown","streetart","in","myself","grass","happiness","dessert","teamfollowback","photoaday","design","rainbow"," ","sleep","camera","eye","nailpolish","cold","forever","neko","goodnight","iphoneasia","norway","selfportrait","fresh","holiday","hkig","brazil","instagold","kuwait","selenagomez","jusgramm","a","bed","sushi","igersitalia","iloveyou","weather"
];





var times = 1;
var line = 1;
var post = 1
var tag = tags[times];
(async () => {
  const browser = await puppeteer.launch({headless: false});
  const page = await browser.newPage();
  await page.goto('https://www.instagram.com/');
  await page.waitFor(2000);
  await page.type('#react-root > section > main > article > div.rgFsT > div:nth-child(1) > div > form > div:nth-child(2) > div > label > input', email, {delay: 20})
  await page.type('#react-root > section > main > article > div.rgFsT > div:nth-child(1) > div > form > div:nth-child(3) > div > label > input', pass, {delay: 20})
  await page.waitFor(500);
  await page.click('#react-root > section > main > article > div.rgFsT > div:nth-child(1) > div > form > div:nth-child(4) > button > div');
  await page.waitFor(2000);
  await page.goto('https://www.instagram.com/explore/tags/'+ tag +'/');
  await page.waitFor(5000);

  while(true){
    try{
      await page.goto('https://www.instagram.com/explore/tags/'+ tag +'/');
      await page.waitFor(60000);
      await page.click('#react-root > section > main > article > div:nth-child(3) > div > div:nth-child('+ line +') > div:nth-child('+ post +') > a > div');
      await page.waitFor(1000);
      await page.type('body > div._2dDPU.CkGkG > div.zZYga > div > article > div.eo2As > section.sH9wk._JgwE > div > form > textarea', text, {delay: 20})
      await page.waitFor(1000);
      await page.click('body > div._2dDPU.CkGkG > div.zZYga > div > article > div.eo2As > section.sH9wk._JgwE > div > form > button'); //post
      await page.waitFor(1000);
      await page.click('body > div._2dDPU.CkGkG > div.zZYga > div > article > header > div.o-MQd.z8cbW > div.PQo_0.RqtMr > div.e1e1d > span > a'); //account
      await page.waitFor(1000);
      await page.click('#react-root > section > main > div > header > section > div.nZSzR > div.Igw0E.IwRSH.eGOV_._4EzTm > span > span.vBF20._1OSdk > button'); //follow
      await page.waitFor(1000);
      await page.click('#react-root > section > main > div > header > section > div.nZSzR > div._862NM > div > button'); //message
      await page.waitFor(2000);
      try{
        console.log("Subscribe to Jack bashed for more scripts that can earn you money");
        await page.click('body > div.RnEpo.Yx5HN > div > div > div > div.mt3GC > button.aOOlW.HoLwm');
      } catch{}
      await page.waitFor(1000);
      await page.type('#react-root > section > div > div.Igw0E.IwRSH.eGOV_._4EzTm > div > div > div.DPiy6.Igw0E.IwRSH.eGOV_.vwCYk > div.uueGX > div > div.Igw0E.IwRSH.eGOV_._4EzTm > div > div > div.Igw0E.IwRSH.eGOV_.vwCYk.ItkAi > textarea', text, {delay:20});
      await page.waitFor(1000);
      await page.click('#react-root > section > div > div.Igw0E.IwRSH.eGOV_._4EzTm > div > div > div.DPiy6.Igw0E.IwRSH.eGOV_.vwCYk > div.uueGX > div > div.Igw0E.IwRSH.eGOV_._4EzTm > div > div > div.Igw0E.IwRSH.eGOV_._4EzTm.JI_ht > button');
      await page.waitFor(1000);
      await page.click('#react-root > section > div > div.Igw0E.IwRSH.eGOV_._4EzTm > div > div > div.DPiy6.Igw0E.IwRSH.eGOV_.vwCYk > div.PjuAP > div > div > div.m7ETg > div > div.Igw0E.IwRSH.eGOV_.ui_ht.n4cjz > button > div > div > div');
      await page.waitFor(1000);
      await page.click('#react-root > section > main > div > header > section > div.nZSzR > div.Igw0E.IwRSH.eGOV_._4EzTm > span > span.vBF20._1OSdk > button > div > span');
      await page.waitFor(1000);
      await page.click('body > div.RnEpo.Yx5HN > div > div > div > div.mt3GC > button.aOOlW.-Cab_'); // unfollowing
    } catch(error){
      console.log(error);
      console.log("comments turned off -- Skipping");
    } finally{
      await page.goto('https://www.instagram.com/explore/tags/'+ tag +'/');
      console.log("done");
      console.log(post,line,times);
      if(times == 100){
        times = 1;
      }
      if(line == 3){
        post = 1;
        line = 1;
        times++
        tag = tags[times];
      }
      if(post == 4){
        post = 1;
        line++;
      }
      post++
    }
  }
  //await page.waitFor(50000);
  //await browser.close();
})();









//var remainder = post % 3;
//if (remainder == 0){
//  line++
//}
