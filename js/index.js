const selectModule = function(obj) {

    const select = document.querySelector(obj.selectClass);
    const selectList = document.querySelector(obj.selectListClass);
    const selectTrigger = document.querySelector(obj.selectTriggerClass);
    const selectTriggerText = selectTrigger.querySelector('.manage-block__select-trigger-text');

    select.addEventListener('click', (e) => {

        const target = e.target;

        if (target.classList.contains(obj.selectTriggerClass) || target.closest(obj.selectTriggerClass)) {
            selectTrigger.classList.toggle('show');
            selectList.classList.toggle('visible');
        };

        if (target.classList.contains('manage-block__select-list-item')) {
            selectTriggerText.textContent = target.textContent;
            selectList.classList.remove('visible');
            selectTrigger.classList.remove('show');
        };
    });
};

const tabsModule = function(obj) {

    const buttons = document.querySelectorAll(obj.buttonClass);
    const content = document.querySelectorAll(obj.contentClass);


    buttons.forEach(el => {
        
        el.addEventListener('click', (e) => {

            const buttonDataAttribute = el.getAttribute('data-tab-button')

            buttons.forEach(el => {
                el.classList.remove('active');
            });

            el.classList.add('active');

            content.forEach(el => {

                const contentDataAttribute = el.getAttribute('data-tab-content')

                el.classList.remove('active');

                if (buttonDataAttribute == contentDataAttribute) {
                    el.classList.add('active');
                };
            });

        });
    });


};

const accordionModule = function() {

    const accordionButtons = document.querySelectorAll('.burger-menu__accordion-trigger');
    const accordionContentItems = document.querySelectorAll('.burger-menu__accordion-content');


    accordionButtons.forEach(el => {
        el.addEventListener('click', () => {

            const buttonDataAttribute = el.getAttribute('data-accordion-button');

            el.classList.toggle('active');

            accordionContentItems.forEach(el => {
                const contentDataAttribute = el.getAttribute('data-accordion-content');

                if (buttonDataAttribute == contentDataAttribute) {
                    el.classList.toggle('active');
                };
            });
        });
    });
};

const burgerMenuModule = function() {

    const burgerMenuButton = document.querySelector('.header__burger-menu-button');
    const burgerMenuBlock = document.querySelector('.burger-menu');

    burgerMenuButton.addEventListener('click', () => {
        burgerMenuBlock.classList.add('active');
    });

    burgerMenuBlock.addEventListener('click', (e) => {
        const target = e.target;

        if (target.closest('.burger-menu__close-button')) {
            burgerMenuBlock.classList.remove('active');
        };
    });

};

const chartModule = function() {

    const salesFirstChart = document.querySelector('#sales-first-chart').getContext('2d');
    const salesSecondtChart = document.querySelector('#sales-second-chart').getContext('2d');

    const firstChartButtons = document.querySelectorAll('.first-chart-button');
    const secondChartButtons = document.querySelectorAll('.second-chart-button');


    let firstChart = new Chart(salesFirstChart, {

        type: 'line',

        data: {
            labels: ['20', '21', '22', '23', '24', '25','26', '27', '28', '01', '02', '03', '04', '05', '06'],
            datasets: [{
                data: [0, 30, 60, 90, 120, 150, 180],
                borderColor: '#7AC70C',
                borderWidth: 1
            }]
        },

        options: {
            plugins: {
                legend: {
                    display: false,
                }
            },
            responsive: true,
            maintainAspectRatio: false,
        },
    });

    let secondChart = new Chart(salesSecondtChart, {
        
        type: 'line',

        data: {
            labels: ['20', '21', '22', '23', '24', '25','26', '27', '28', '01', '02', '03', '04', '05', '06'],
            datasets: [{
                data: [0, 30, 60, 90, 120, 150, 180],
                borderColor: '#7AC70C',
                borderWidth: 1
            }]
        },

        options: {
            plugins: {
                legend: {
                    display: false,
                }
            },
            responsive: true,
            maintainAspectRatio: false,
        },
    });


    const changeGraphsType = function(items, chart) {
        
        items.forEach(el => {
            el.addEventListener('click', () => {
    
                items.forEach(el => {
                    el.classList.remove('active');
                });  
                
                el.classList.add('active');
    
                if (el.getAttribute('data-chart-type') === 'line') {
                    chart.config._config.type = 'line';
                    chart.update();
                };
                if (el.getAttribute('data-chart-type') === 'broke-line') {
                    chart.config._config.type = 'line';
                    chart.update();
                };
                if (el.getAttribute('data-chart-type') === 'bar') {
                    chart.config._config.type = 'bar';
                    chart.update();
                };
            });
        });
    };

    changeGraphsType(firstChartButtons, firstChart);
    changeGraphsType(secondChartButtons, secondChart);
};

const showCardDetails = function() {

    const scrollToBlock = document.querySelector('.requests');
    const showElements = document.querySelectorAll('.card-info__results-button');
    const priceBlock = document.querySelector('.card-info__price');


    window.addEventListener('scroll', () => {

        const scrollFromTop = Math.ceil(window.scrollY);

        if (scrollFromTop > scrollToBlock.offsetTop) {

            showElements.forEach(el => {
                el.classList.add('visible');
            }); 

            priceBlock.style.display = 'none';

        } else {

            showElements.forEach(el => {
                el.classList.remove('visible');
            }); 

            priceBlock.style.display = 'flex';

        };
    });
};


tabsModule({
    buttonClass: '.main-tabs__button',
    contentClass: '.main-tabs__content'
});

tabsModule({
    buttonClass: '.secondary-tabs__button',
    contentClass: '.secondary-tabs__content'
});

tabsModule({
    buttonClass: '.inner-tabs__button',
    contentClass: '.inner-tabs__content'
});

tabsModule({
    buttonClass: '.statistics__table-tabs-button',
    contentClass: '.statistics__table-tabs-content-item'
});

selectModule({
    selectClass: '.main-select',
    selectListClass: '.main-select__list',
    selectTriggerClass: '.main-select__trigger',
});

selectModule({
    selectClass: '.burger-select',
    selectListClass: '.burger-select__list',
    selectTriggerClass: '.burger-select__trigger',
});


showCardDetails();
accordionModule();
burgerMenuModule();
chartModule();