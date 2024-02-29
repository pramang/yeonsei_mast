const doctor = () => {
    let doctor = get('.doctor');
    if (doctor) {
        const doctorData = [
            `연세대학교 의과대학 졸업<br>
            연세대학교 세브란스병원 인턴 수료<br>
            연세대학교 세브란스병원 정형외과 레지던트 수료<br>
            연세대학교 세브란스병원 정형외과 전문의 수료<br>
            FIFA 축구의학 학위과정 수료<br>
            現 대한정형외과학회 정회원<br>
            現 대한정형외과 슬관절학회 평생회원<br>
            現 질병관리본부 기관생명윤리 위원회원<br>
            現 연세대학교 의과대학 정형외과학교실 외래교수<br>
            現 ISAKOS 공인수련기관 기관장<br>
            現 연세사랑병원 임상시험실시기관 기관장<br>
            2003 ~ 연세사랑병원 병원장`,
            `現 연세의대 정형외과학교실 명예교수<br>
            現 세브란스 관절경 연구회 지도교수<br>
            現 아시아 관절경 학회 명예회장<br>
            現 북경의대 스포츠의학연구소 종신 명예교수<br>
            연세대학교 의과대학 세브란스병원 정형외과 과장(2001-2006)<br>
            연세대학교 의과대학 정형외과학교실 주임교수 (2007-2011)<br>
            대한정형외과학회 회장 (2015-2016)`,
            `아주대학교병원 신경외과 외래교수<br>
            미국의사자격증(ECFMG certification)취득<br>
            미국최소침습척추수술전문의(FAMISS)취득<br>
            신경외과 전문의<br>
            前 청담 우리들병원 척추 신경외과 전문의<br>
            現 연세사랑병원 원장`,
        ];
        let $p = getAll('.doc-pop .gallelry-body p');
        let $docBtn = getAll('.doc-pop .sub-btn');
        let $docPopup = getAll('.doc-pop .popup-gallery');
        let $docPopupClose = getAll('.doc-pop .popup-gallery .gallelry-header i');
        let $bg = get('.sub-bg');
        let isplay = 'true';
        $docBtn.forEach((item, idx) => {
            item.addEventListener('click', (e) => {
                $docPopup.forEach((item) => {
                    item.classList.remove('show');
                });
                $docPopup[idx].classList.add('show');
                $bg.style.display = 'block';
                $p[idx].innerHTML = doctorData[idx];
            });
        });
        $docPopupClose.forEach((item, idx) => {
            item.addEventListener('click', (e) => {
                $docPopup[idx].classList.remove('show');
                $bg.style.display = 'none';
            });
        });
    }
}; 

const interior = () => {
    const interior = get('.interior');
    if (interior) {
        const textData = [
            `연세사랑병원의 인공관절수술은 3D맞춤형인공관절수술로, 특허청으로부터 획득한 2건의 특허 기술 [브릿지 구조를 포함한 인공 무릎관절 환자 맞춤형 수술 가이드 및 제작]과 [정렬 로드를 포함하는 인공 무릎관절 환자 맞춤형 수술가이드 제작]을 이용해 수술을 진행하고 있습니다.`,
            `연세사랑병원은 무엇보다 환자분들에게 더 나은 환경과 서비스를 제공하기 위해 노력하고 있습니다. 이에 본원은 서울 서초, 강남에서 유일하게 3회 연속 보건복지부지정 관절전문병원으로 지정됨과 동시에 의료기관 인증을 2회 연속 획득하는 쾌거를 이룩함으로써 관절 분야의 전문성을 입증하였습니다.`,
            `2019년에는 중국 청도시립병원과 MOU를 체결을 하며 청도시립병원 내에 연세사랑병원의 관절전문센터를 개소하였습니다. 이처럼 국내뿐 아니라 국외에서도 활동하며, 본원의 3D 인공관절 수술기법과 의료기술 둥을 세계에 널리 알렸습니다.`,
            `강남 교보타워의 멋진 경치와 여유로움이 어우러진 연세사랑병원의 진정한 가치를 느낄 수 있는 공간입니다. 안락한 대기공간과 업무를 보실 수 있는 편리한 시설들이 준비되어 있습니다.`,
        ];
        const $textLi = getAll('.interior .slide .text-box li');
        const $imgLi = getAll('.interior .slide .img-box li');
        const $imgUl = get('.interior .slide .img-box ul');
        const $next = get('.interior .slide .img-box .btn.next');
        const $prev = get('.interior .slide .img-box .btn.prev');
        const $p = get('.interior .slide .text-box p')
        let posX = [0, -500, -1000, -1500, -2000];
        let current = 0,
            totalImage = $imgLi.length,
            old = 0,
            textOld = 0;
        let cnt = 0;
        function banner() {
            $imgUl.style.left = `${posX[current]}px`;
        }
        $prev.addEventListener('click', (e) => {
            current--;
            cnt--;
            if (cnt < 0) cnt = 3;
            $textLi[cnt].classList.add('active');
            $textLi[textOld].classList.remove('active');
            $p.textContent = textData[cnt];
            if (current < 0) {
                $imgUl.style.left = `${posX[totalImage - 1]}px`;
                $imgUl.style.transitionDuration = '0s';
                current = totalImage - 2;
                setTimeout(() => {
                    $imgUl.style.transitionDuration = '0.4s';
                    banner();
                }, 1);
            } else {
                $imgUl.style.transitionDuration = '0.4s';
                banner();
            }
            $imgLi[current].classList.remove('on');
            $imgLi[old].classList.add('on');
            textOld = cnt;
            old = current;
        });
        $next.addEventListener('click', (e) => {
            current++;
            cnt++;
            if (cnt > $textLi.length - 1) cnt = 0;
            $textLi[cnt].classList.add('active');
            $textLi[textOld].classList.remove('active');
            $p.textContent = textData[cnt];
            if (current >= 3) {
                $imgLi[0].classList.remove('on');
            }
            if (current === totalImage - 1) {
                banner();
                setTimeout(() => {
                    $imgUl.style.transitionDuration = '0s';
                    $imgUl.style.left = `${posX[0]}px`;
                    current = 0;
                }, 400);
            } else {
                $imgUl.style.transitionDuration = '0.4s';
                banner();
            }
            $imgLi[current].classList.remove('on');
            $imgLi[old].classList.add('on');
            textOld = cnt;
            old = current;
        });
    }
};

const device = () => {
    const device = get('.device');
    if (device) {
        const deviceDeta = [
            {
                title: `로슈 면역/화학 장비`,
                text: `Roche사의 cobas pro, cobas c 503, cobas e 801는 수많은 임상 화학 및 연력화학 검사를 빠르게 제공하는 장비입니다. 약 100여개의 면역 분석과 화학 검사가 가능한 첨단 진단장비입니다.`,
            },
            {
                title: `Sonialvision G4`,
                text: `일본 시마즈사의 Sonialvision G4는 투시촬영 외에도 Tomosynthesis, Slot Radiography, RSM-DSA까지 진단에 필요한영상을 더욱 선명하고 깨끗하게 제공하여 Fluoroscopy의 활용도를다양하게 확장할 수 있는 장비입니다.`,
            },
            {
                title: `자동혈액분석기장비`,
                text: `Siemens사의 ADVIA 2120i 로 혈액에 대한 전반적인 검사를 시행하며, 빈혈, 혈액종양질환, 출혈 및 혈전질환 등의 진단에 필수적인 CBC검사, 말초혈액도말검사, 골수검사, 일반 및 특수 검사를 수행합니다.`,
            },
            {
                title: `Achieva 1.5T MRI`,
                text: `최신형 MRI Achieva 1.5T는 매우 긴 검사시간을 필요로 했던 기존의 MRI 장비에 비해 각종 부위의 검사를 획기적으로 단축시켰으며, 신진 대사에 필요한 물질 측정 효과가 2배로 높아져 환자의 치료 방향을 결정하기가 매우 용이해졌습니다.`,
            },
            {
                title: `Prostar C-arm`,
                text: `연세사랑병원에서 도입한 필립스 이동형 C-arm 시스템은 콤팩트 크기에도 불구, 수술용 영상을 지원하기 위한 첨단 테크놀러지를 장착하고 있습니다.`,
            },
            {
                title: `초음파 진단기 (SONO)`,
                text: `GE사의 Logiq P6 Pro 제품으로 인체에 무해한 초음파를 사용하여 보고자 하는 인체의 조직 단면을 모니터에 영상화 시켜 진단하는 장비`,
            },
            {
                title: `체외충격파 (ESWT)`,
                text: `독일 SIEMENS 사의 ESWT 기기를 사용하고 있습니다. 국내에 몇 대 밖에 보급되지 않은 고가의 장비로 그 중에 4대를 연세사랑 병원에서 사용하고 있습니다.`,
            },
            {
                title: `전신골밀도 측정기 (BMD)`,
                text: `미국의 GE LUNAR 사의 제품으로 이중에너지 엑스선을 사용하므로 방사선의 피폭량을 최소화하면서 연조직 양의 변화에 따른 골밀도의 변화없이 정확한 골밀도의 측정이 가능합니다. `,
            },
            {
                title: `관절내시경`,
                text: `관절내시경은 위내시경 검사를 하듯이, 관절질환이 의심되는 관절부위에 미세한 구멍을 내고 특수카메라가 달린 관절내시경을 삽입해 모니터를 통해 관절상태를 정확하게 진단합니다.`,
            },
            {
                title: `디지털 적외선 통증 진단기 (IRIS8000)`,
                
                text: `체열 변화를 촬영하여 눈에 보이지 않는 신경 통증 부위나 질병부위를 보다 정확하게 판별해내는 것이 바로 적외선 체열검사입니다.`,
            },
        ];
        let $deviceUl = get('.device .gallery ul');
        let output = '';
        for (let i = 0; i < 10; i++) {
            output += `<li>
            <img src="images/sub/device${i}.jpg" alt="장비" />
            <div class="tit-box">
                <h4>${deviceDeta[i].title}</h4>
                <p>
                    ${deviceDeta[i].text}
                </p>
            </div>
        </li>`;
        }
        $deviceUl.innerHTML = output;
        $deviceDiv = getAll('.device .gallery ul li div');
    }
};

const subInit = () => {
    doctor();
    device();
    interior();
};

(() => {
    window.addEventListener('load', (e) => {
        subInit();
    });
})();

