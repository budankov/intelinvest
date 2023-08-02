export const selectCustomStyles = {
    input: (provided) => ({
        ...provided,
        color: '#fff', // Змініть колір тексту, який вводите в інпуті
    }),
    placeholder: (provided) => ({
        ...provided,
        color: '#fff', // Змініть бажаний колір плейсхолдеру
    }),
    control: (provided, state) => ({
        ...provided,
        width: '600px', // Змініть ширину контролу на ваш розмір
        fontSize: '16px',
        color: '#fff', // Змініть колір тексту для опцій
        borderRadius: '8px', // Змініть радіус бордеру на ваш розмір
        backgroundColor: '#444c5e', // Змініть колір фону на ваш колір
        borderColor: state.isFocused ? '#757b8c' : '#444c5e', // Змініть колір бордеру на ваш колір
        boxShadow: state.isFocused ? '0 0 0 1px #757b8c' : 'none', // Змініть тінь при фокусуванні
        cursor: 'pointer',
        '&:hover': {
            borderColor: '#757b8c' // Змініть колір бордеру при наведенні на контрол
        }
    }),
    option: (provided, state) => ({
        ...provided,
        backgroundColor: state.isSelected ? '#757b8c' : '#444c5e', // Змініть колір фону для вибраних і невибраних опцій
        color: '#fff', // Змініть колір тексту для опцій
        cursor: 'pointer',
        borderRadius: '3px', // Змініть радіус бордеру на ваш розмір
        '&:hover': {
            backgroundColor: '#757b8c' // Змініть колір бордеру при наведенні на контрол
        }
    }),
    menu: (provided) => ({
        ...provided,
        width: '600px',
        backgroundColor: '#444c5e', // Змініть колір фону випадаючого меню
        borderRadius: '8px', // Змініть радіус бордеру випадаючого меню
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', // Змініть тінь для випадаючого меню
    }),
    menuList: (provided) => ({
        ...provided,
        '&::-webkit-scrollbar': {
            width: '7px',
            backgroundColor: '#444c5e',
        },
        '&::-webkit-scrollbar-thumb': {
            backgroundColor: '#c1c1c1',
            borderRadius: '5px',
        },
    }),
    singleValue: (provided) => ({
        ...provided,
        color: '#fff', // Змініть колір для вибраного значення
    }),
    clearIndicator: (provided) => ({
        ...provided,
        // Змініть колір крестика (хрестика)
        '& svg': {
            fill: '#fff', // Змініть колір крестика
            transition: 'fill 0.3s', // Додайте плавний перехід
        },
        // Ефекти при наведенні та активному стані
        '&:hover svg, &:active svg': {
            fill: '#2c3040', // Змініть колір при наведенні та активному стані
        },
    }),
    dropdownIndicator: (provided) => ({
        ...provided,
        // Змініть колір стрілки
        '& svg': {
            fill: '#fff', // Змініть колір стрілки
            transition: 'fill 0.3s', // Додайте плавний перехід
        },
        // Ефекти при наведенні та активному стані
        '&:hover svg, &:active svg': {
            fill: '#2c3040', // Змініть колір при наведенні та активному стані
        },
    }),
};