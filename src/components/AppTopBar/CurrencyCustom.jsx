export const currency = [
    { value: 'USD', label: 'USD' },
    { value: 'EUR', label: 'EUR' },
    { value: 'GBP', label: 'GBP' },
    { value: 'UAH', label: 'UAH' }
];

export const customStyles = {
    control: (provided, state) => ({
        ...provided,
        width: '94px', // Змініть ширину контролу на ваш розмір
        // fontSize: '13px',
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
        backgroundColor: '#444c5e', // Змініть колір фону випадаючого меню
        borderRadius: '8px', // Змініть радіус бордеру випадаючого меню
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', // Змініть тінь для випадаючого меню
    }),
    singleValue: (provided) => ({
        ...provided,
        color: '#fff', // Змініть колір для вибраного значення
    }),
    dropdownIndicator: (provided, state) => ({
        ...provided,
        transition: 'transform 0.1s', // Додати анімацію
        transform: state.selectProps.menuIsOpen ? 'rotate(180deg)' : null
    }),
    indicatorSeparator: () => ({
        display: 'none' // Прибирання вертикального роздільника
    }),
};