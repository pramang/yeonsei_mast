

const mainVisual = () => {
    const $pagingli = getAll('#main-visual .paging li');
    const $bannerli = getAll('#main-visual .main-banner li');
    let current =0, old =0, size=100 , totalImage = $bannerli.length, timer = null, interval = 5000;

    timer = setInterval(make, interval);
    function banner( txt ){
        if(txt === 'next') { num = size}
        $bannerli[current].style.transition = '0s';
        $bannerli[current].style.left = `${num}%`;

        setTimeout( () => {
            $bannerli[current].style.transition = '0.4s';
            $bannerli[current].style.zIndex = '10';
            $bannerli[current].style.left = '0px';
            $bannerli[current].classList.add('on');
            $pagingli[current].classList.add('on');

            $bannerli[old].style.zIndex = '1';
            $bannerli[old].style.left = `${num * -1}%`;
            $bannerli[old].classList.remove('on');
            $pagingli[old].classList.remove('on');
            old = current 
        },20);

        if(timer !== null){
            clearInterval(timer);
            timer = setInterval(make, interval);
        }
    }
    function make(){
        current = current>= totalImage-1 ? 0 : current +1;
        banner('next');
    }

    $pagingli.forEach( (item, idx) =>{
        item.addEventListener('click', e => {
            if(idx===current)return
            current  = idx;
            banner('next');
        })
    })
}

const docBan = () => {
    let $banner = get('.doctor .banner');
    let $bannerli = getAll('.doctor .banner > li');
    let $prev = get('.doctor .prev');
    let $next = get('.doctor .next');
    
    let current = 0 , old = 0, totalImage = $bannerli.length , timer = null, interval = 4000, size=1200;
    timer = setInterval(make, interval);
    function make(){
        current = (current >= totalImage -1 ) ? 0 : current + 1;
        banner('next')
    }
    $next.addEventListener('click', e => {
        current = (current >= totalImage -1 ) ? 0 : current + 1;
        banner('next')
    });

    $prev.addEventListener('click', e => {
        current = (current <= 0 ) ? totalImage - 1 : current -1;
        banner('prev')
    });

    function banner(com) {
        let num = (com === 'next') ? size : -size;
        $bannerli[current].style.transition = '0s';
        $bannerli[current].style.left = `${num}px`;
        setTimeout(()=>{
            $bannerli[current].style.transition = '0.4s';
            $bannerli[current].style.left = `0px`;
            $bannerli[current].style.zIndex = `10`;
            $bannerli[old].style.left = `${num * -1}px`;
            $bannerli[old].style.zIndex = `1`;
            old = current;
        },50)
       
        if(timer !== null){ 
            clearInterval(timer);
            timer = setInterval(make, interval);
        }
    }
}

const partner = () => {
    let $partner = get('.partner');
    let $roller = get('.partner .rolling-list');
    let $rollerUl = get('.partner .rolling-list ul');
    $roller.id = 'roller1'; 

    let clone = $roller.cloneNode(true);
    clone.id = 'roller2';
    $partner.appendChild(clone); 
    document.querySelector('#roller1').style.left = '0px';
    document.querySelector('#roller2').style.left = $rollerUl.offsetWidth + 'px';

    $roller.classList.add('original');
    clone.classList.add('clone');
}

const tab = () => {
    let $li = getAll('.youtube .main-tab .tabmenu li');
    let $tabcon = getAll('.youtube .main-tab .tab-wrap .tab-con');
    let $con = get('.youtube');
    let id = 0, h = 0, old = 0;
    let arr =[];
    $li.forEach((item,idx) => {
        item.addEventListener('click', e => {
            if(old === idx) return;
            id = idx;
            $li[id].classList.add('on');
            $li[old].classList.remove('on');
            $tabcon[id].classList.add('on');
            $tabcon[old].classList.remove('on');
            old = id;
            if(id == 1){
                const acc = () => {
                    let dt = getAll('.youtube .tab-wrap .qna .acc dt');
                    let dtI = getAll('.youtube .tab-wrap .qna .acc dt i');
                    let dd = getAll('.youtube .tab-wrap .qna .acc dd');
                    dt.forEach((item,idx) => {
                        let h = dd[idx].offsetHeight + 20;
                        arr.push(h);
                        function add(idx) {
                            dt[idx].classList.add('on');
                            dd[idx].classList.add('on');
                            dtI[idx].classList.replace('xi-plus','xi-minus');
                        }
                        function remove(idx){
                            dt[idx].classList.remove('on');
                            dd[idx].classList.remove('on');
                            dtI[idx].classList.replace('xi-minus','xi-plus');
                        }
                        dd[idx].style.height = '0px';
                        remove(idx)
                        dd[0].style.height = arr[0] + 'px';
                        add(0)
                        item.addEventListener('click', e => {
                            let isOn = item.classList.contains('on');
                            if(isOn) {
                                dd[idx].style.height = '0px';
                                remove(idx)
                            }else {
                                dd[idx].style.height = arr[idx] + 'px';
                                add(idx)
                            }
                        })
                    })
                }
                acc();
            }
        })
    })
}

const autoVideo = () => {
    let data = [
        {id:1, url:"https://www.youtube.com/embed/yBYMn7mV2RI?autoplay=1&mute=1&loop=1&playlist=yBYMn7mV2RI"},
        {id:2, url:"https://www.youtube.com/embed/6t6ancTstS4?autoplay=1&mute=1&loop=1&playlist=6t6ancTstS4"},
        {id:3, url:"https://www.youtube.com/embed/3TA74llPipQ?autoplay=1&mute=1&loop=1&playlist=3TA74llPipQ"},
        {id:4, url:"https://www.youtube.com/embed/uDRwYc2Abdk?autoplay=1&mute=1&loop=1&playlist=uDRwYc2Abdk"}
    ]
    let $iframe = get('.youtube .main-tab .tab-wrap .movie-wrap .movie-play iframe');
    let $videoList = getAll('.youtube .main-tab .tab-wrap .movie-wrap .movie-list ul li');
    let site, cnt=0;
    $videoList.forEach((item,idx) => {
        item.addEventListener('click', e => {
            cnt = idx;
            site = data[cnt].url;
            $iframe.setAttribute('src', site);
        })
    })
}

const wayTab = () => {
    let $tabs = getAll('.main-way .tabs a');
    let $con = getAll('.main-way .tabs-con .tab-inner');
    $tabs.forEach((item, idx) => {
        item.addEventListener('click', e => {
            e.preventDefault();
            let current = e.currentTarget;
            for(let i = 0; i < $tabs.length; i++){
                $tabs[i].classList.remove('on');
                $con[i].classList.remove('on');
            }
            current.classList.add('on');
            $con[idx].classList.add('on');
        })
    })
}

const popup = () => {    
    const $popBg = get('.pop-bg');
    const $layer = get('.quick .pop');
    const $popup = get('.popup');
    const $close = get('.popup .close');

    let $question = [
        'Q. 팔을 움직일 때 특정 각도에서 통증이 있다',
        'Q. 팔을 많이 쓰고 난 뒤에 어깨 통증이 심하다.',
        'Q. 밤에 잘 때 아파서 모로 누워 자기 힘들다.',
        'Q. 멀리 있는 물건을 잡기 위해 팔을 뻗을 때 통증이 심하다.',
        'Q. 어깨의 힘이 예전보다 약해져 무거운 물건을 들어서 올릴 때 들어올리기가 어렵다',
        'Q. 평소에 즐기던 운동 (수영, 골프, 탁구, 테니스)을 할 때 통증이 있어 이전처럼 운동하기가 어렵다.',
        'Q. 아침에 일어났을 때 특히 어깨가 많이 뻣뻣하여 움직이기가 어렵다.',
        'Q. 어깨에 힘을 줘서 팔을 들어 올릴 때 팔이 일정 각도이상 더 올라가지 않는다.',
        'Q. 어깨통증에 동반하여 날개뼈 주위 통증이나 상완의 욱신거리는 통증이 있다.',
        'Q. 어깨를 움직일 때 소리가 나고 통증이 발생한다',
        '자가진단이 완료되었습니다.',
    ];

    let arr = []; 
    let cnt = 0; 

    let answer = document.getElementsByName('check');
    let $questionText = get('.popup .survey-list p.questionText');
    let $resultBox = get('.popup .survey-list .result-box');
    let $resultText = get('.popup .survey-list .result-box .result');
    let $radioBox1 = get('.popup .survey-list .radi-box1');
    let $radioBox2 = get('.popup .survey-list .radi-box2');
    let $btn1 = get('.popup .survey-list .btn1');
    let $btn2 = get('.popup .survey-list .btn2');

    let $next = get('.popup .survey-list .btn .next');
    let $prev = get('.popup .survey-list .btn .prev');
    let $restart = get('.popup .survey-list .btn .restart');
    let $reserve = get('.popup .survey-list .btn .reserve');

    let circularProgress = get('.popup .progress .circle');
    let progressValue = get('.popup .progress .circle-txt');
    let progressStartValue = 0;

    const show = () => {
        $popup.classList.add('show');
        $popBg.classList.add('show');
    }
    const hide = () => {
        $popup.classList.remove('show');
        $popBg.classList.remove('show');
    }
    $layer.addEventListener('click',show);
    $popBg.addEventListener('click',hide);
    $close.addEventListener('click',hide);

    $btn2.style.display = "none";
    $resultBox.style.display = "none";

    $restart.addEventListener('click', (e) => {
        arr = [];
        cnt = 0;
        $questionText.textContent = $question[0];
        progressStartValue = 0;
        progressValue.textContent = `${progressStartValue}%`;
        $resultText.textContent = '';
        circularProgress.style.background = '';

        $resultBox.style.display = "none";
        $radioBox1.style.display = "block";
        $radioBox2.style.display = "block";
        $btn1.style.display = "flex";
        $btn2.style.display = "none";
    });

    function progress(idx) {
        if (cnt >= $question.length) {
            $questionText.textContent = $question[10];
            return;
        }
        arr.push(answer[idx].value);
        $questionText.textContent = $question[cnt];
        progressStartValue += 10;
        progressValue.textContent = `${progressStartValue}%`;
        circularProgress.style.background = `conic-gradient(#EFA603 ${progressStartValue * 3.6}deg, #ededed 0deg)`;

        answer[0].checked = false;
        answer[1].checked = false;
    }

    $next.addEventListener('click', (e) => {
        if (cnt === $question.length - 2) {
            let count = arr.filter(item => 'yes' === item).length;
            if(count <= 3){
                $questionText.textContent = '';
                $resultText.textContent = '꾸준한 운동과 관리로도 어깨건강을 바로잡으실 수 있습니다.';
            }else if(count >=4 && count < 6){
                $questionText.textContent = '';
                $resultText.textContent = '어깨건강관리에 주의가 필요합니다. 내원하시어 정확한 상담을 받아보세요.';
            }else if(count >= 7){
                $questionText.textContent = '';
                $resultText.textContent = '어깨건강상태가 심각한 수준입니다. 가급적 빠른 내원하시길 바랍니다.';
            }
            $resultBox.style.display = "block";
            $radioBox1.style.display = "none";
            $radioBox2.style.display = "none";
            $btn1.style.display = "none";
            $btn2.style.display = "flex";
        }

        if (answer[0].checked) {
            cnt++;
            progress(0);
        } else if (answer[1].checked) {
            cnt++;
            progress(1);
            console.log(arr);
        } else {
            alert('설문지 항목에 체크를 해주세요.');
        }
    });

    $prev.addEventListener('click', (e) => {
        if (arr.length === 10) return;
        if (cnt <= 0) return;
        cnt--;
        $questionText.textContent = $question[cnt];
        progressStartValue -= 10;
        progressValue.textContent = `${progressStartValue}%`;
        circularProgress.style.background = `conic-gradient(#EFA603 ${progressStartValue * 3.6}deg, #ededed 0deg)`;
        arr.pop();
    });
}

const topBtn = () =>{
    let li =getAll('.gnb li');   
    let ttop = get('.top');
    const quick = get('.quick');
    let ty = 0;

    window.addEventListener('scroll', e => {
        let t = window.scrollY;
        if( t >= 800 ) {
            ttop.classList.add('on');
        }else {
            ttop.classList.remove('on');
        }
        quick.style.top = (t + 300) + 'px';
    })

    ttop.addEventListener('click', e => {           
        ty = 0           
        window.scrollTo({top:ty, behavior:'smooth'});
    })
}

(()=>{
    mainVisual();
    docBan(); 
    partner();
    tab();
    autoVideo();
    wayTab(); 
    popup(); 
    topBtn();
})();






