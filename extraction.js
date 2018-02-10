document.body.onload = function(){
  console.log("Done.");
  dnExecuteButton = document.createElement('button');
  dnExecuteButton.type = "button";
  dnExecuteButton.innerHTML = "Start Scraping";
  dnExecuteButton.addEventListener('click', scrape);
  document.getElementById('navcontainer').appendChild(dnExecuteButton);
  createJsonDOMElement();
};

function createJsonDOMElement(){
  dnJsonBox = document.createElement('textarea');
  dnJsonBox.rows = "5";
  dnJsonBox.id = "results";
  document.getElementById('navcontainer').appendChild(dnJsonBox);
};

function scrape(){
    dnJsonBox = document.getElementById('results');

    // dnJsonBox.value = '{';

    dnlsHeadlines = document.getElementsByClassName('enHeadline');
    // json = {};
    for(let i = 0; i < dnlsHeadlines.length; i++){

      dnArticle = dnlsHeadlines[i].parentNode;
      dnHeadline = dnlsHeadlines[i];
      dnAuthor = dnArticle.nextSibling;
      dnLength = dnAuthor.nextSibling;
      dnDate = dnLength.nextSibling;
      dnPublisher = dnDate.nextSibling;
      dnStatus = dnPublisher.nextSibling;
      dnVersion = dnStatus.nextSibling;
      dnLanguage = dnVersion.nextSibling;
      dnNext = dnLanguage.parentNode;
      dnlsparagraphs = dnNext.getElementsByClassName('articleParagraph');

      console.log('NEW ENTRY');
      console.log(dnHeadline.innerHTML);
      console.log(dnAuthor.innerHTML);
      console.log(dnLength.innerHTML);
      console.log(dnDate.innerHTML);
      console.log(dnStatus.innerHTML);
      console.log(dnVersion.innerHTML);
      console.log(dnLanguage.innerHTML);
      //console.log(dnNext.innerHTML);

      strParagraph = '';
      for (let i = 0; i < dnlsparagraphs.length; i++) {
        strParagraph += dnlsparagraphs[i].textContent;
      }

      console.log(strParagraph);

      json = {
        "Entry" : i
        , "Headline" : dnHeadline.innerHTML
        , "Author" : dnAuthor.innerHTML
        , "Length" : dnLength.innerHTML
        , "Date" : dnDate.innerHTML
        , "Status" : dnStatus.innerHTML
        , "Version" : dnVersion.innerHTML
        , "Language" : dnLanguage.innerHTML
        , "Content" : strParagraph
      }


      dnJsonBox.value += '"' + i + '":' + JSON.stringify(json) + ',';
    };

    // dnJsonBox.value += "}";
    // var downloadAnchorNode = document.createElement('a');
    // downloadAnchorNode.addEventListener('click', show);
    // downloadAnchorNode.innerHTML = 'SHOW JSON';
    //
    // var dnJsonData = document.createElement('p');
    //
    // document.getElementById('navcontainer').appendChild(downloadAnchorNode);
    // document.getElementById('navcontainer').appendChild(dnJsonData);
    //
    // function show() {
    //   dnJsonData.innerHTML = JSON.stringify(json);
    // }
};
