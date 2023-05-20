import errorImg from '../../assets/images/44-incredible-404-error-pages@3x-1560x760.png'

const ErrorPage = () => {
    return (
        <div className='flex items-center justify-center h-screen p-4 md:p-16'>
            <img src={errorImg} alt="" />
        </div>
    );
};

export default ErrorPage;