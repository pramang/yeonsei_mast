// 전체페이지 공통
const get  = target  => document.querySelector(target);
const getAll  = target  => document.querySelectorAll(target);

let $link = getAll('a[href="#"]');
$link.forEach(item => {
    item.addEventListener('click', e => {
        e.preventDefault();
    })
})

const gnb = () => {
    window.addEventListener('scroll', e => {
        let logo = document.getElementById('logo');
        let t = window.scrollY;
        if(t>=100) {
            header.classList.add('active');
            logo.setAttribute('src','./images/common/ft_logo.png');
        }else { 
            header.classList.remove('active');
            logo.setAttribute('src','./images/common/hd_logo.png');
        }
    })
}//end gnb

const navi = () => {
    let $gnbli = getAll('#header .nav .gnb > li');
    let $header = get('#header');
    let $sub = getAll('#header .nav .gnb li .sub');
    let old= 0;

    $gnbli.forEach((item,idx) => {
        item.addEventListener('mouseenter', e => {
            $sub.forEach( (subItem, index) => {
                subItem.classList.remove('on');
            })
            
            $header.classList.remove('on' + old );
            $header.classList.add('on' + idx );
            $sub[idx].classList.add('on');
            old = idx;
        })
    })
    $header.addEventListener('mouseleave', e => {
        $sub.forEach( (subItem, index) => {
            subItem.classList.remove('on');
        })
        $header.classList.remove('on' + old );
        $header.classList.remove('on');
    })
}//end nav



const family = () => {
    let $title = get('.family .title');
    let $list = get('.family .list');
    let isOpen = null;

    if($title != null){
        $title.addEventListener('click', e => {
            $list.classList.toggle('on');
            $title.classList.toggle('on');
            e.preventDefault();
        })
    }
   
}

const comInit = ()  => {
    const loadPage  = (page, tag ) => {
        fetch(page)
        .then(res => {
        return res.text()
        })
        .then(data => {
            get( tag ).innerHTML = data;
            gnb();
            navi();
            family();
        });
    }
    loadPage("./page/header.html", 'header');
    loadPage("./page/footer.html", 'footer');    
}

;( () => {
    comInit();    
})();

