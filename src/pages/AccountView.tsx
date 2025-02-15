import { useState } from 'react';
import ReuseDropdown from '../components/ReuseDropdown';
import { useNavigate } from 'react-router-dom';

const { VITE_DEFAULT_ACCOUNT_NAME } = import.meta.env;

const AccountView = () => {
  const [formState, setFormState] = useState({
    realm: 'pc',
    accountName: VITE_DEFAULT_ACCOUNT_NAME,
  });

  const navigate = useNavigate();

  const onSubmit = () => {
    localStorage.setItem('accountName', formState.accountName);
    localStorage.setItem('realm', formState.realm);
    navigate('/characterView');
  };

  const setSelectedOption = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const optionName = e?.target?.id;
    const optionValue = e?.target?.value;

    setFormState({
      ...formState,
      [optionName]: optionValue,
    });
  };

  const handleInputChange = (e: any) => {
    const inputName = e?.target?.id;
    const inputValue = e?.target?.value;

    setFormState({
      ...formState,
      [inputName]: inputValue,
    });
  };

  return (
    <div className="justify-self-center bg-main-vertical min-w-[50px] min-h-[50px] py-[30px] px-[50px]">
      <div className="flex justify-center items-center">
        <img
          src="/POE-main-logo-192x192.png"
          alt="Logo"
          className="w-25 h-25"
        />
      </div>
      <div className="xs-media-flex items-center">
        <div className="w-[100%] mr-[5px] pb-[6px]">
          <ReuseDropdown
            id="realm"
            selectedOption={formState.realm}
            setSelectedOption={setSelectedOption}
            options={[
              { name: 'PC', value: 'pc' },
              { name: 'Xbox', value: 'xbox' },
              { name: 'PS4', value: 'ps4' },
            ]}
          />
        </div>
        <div className="pb-[6px]">
          <input
            type="text"
            id="accountName"
            onChange={handleInputChange}
            className="mr-[5px] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="accountName#1234"
            defaultValue={VITE_DEFAULT_ACCOUNT_NAME}
            required
          />
        </div>
        <div className="pb-[6px]">
          <button
            type="button"
            onClick={onSubmit}
            className="border w-[100%] focus:outline-none hover:bg-gray-800 font-medium rounded-lg text-sm px-5 py-2.5"
          >
            Import
          </button>
        </div>
      </div>
      <div className="text-sm">
        <ul className="list-disc pl-4">
          <li>Only public characters are viewable, like in PoB.</li>
          <li>Uses PoE1 API; PoE2 support coming when available.</li>
          <li>
            <a
              href="https://www.pathofexile.com/developer/docs"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline break-all"
            >
              Docs here
            </a>
          </li>
        </ul>
      </div>
      <div className="mt-[8px] justify-self-center">
        <a
          href="https://github.com/bryan667/path-of-strongest"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="githb2.png" alt="GitHub" width="60px" />
        </a>
      </div>
    </div>
  );
};

export default AccountView;
