import { ReactElement } from 'react';

interface CheckIconProps {
  checked: boolean;
}

export const CheckIcon = (props: CheckIconProps): ReactElement => {
  const { checked } = props;

  return (
    <svg fill="none" height="24" viewBox="0 0 25 24" width="25" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M23.5742 12C23.5742 18.0751 18.6494 23 12.5742 23C6.49909 23 1.57422 18.0751 1.57422 12C1.57422 5.92487 6.49909 1 12.5742 1C18.6494 1 23.5742 5.92487 23.5742 12Z"
        fill={checked ? '#00c7ae' : '#D7D7D7'}
      />
      {!checked && (
        <path
          clipRule="evenodd"
          d="M12.5742 21.5C17.8209 21.5 22.0742 17.2467 22.0742 12C22.0742 6.75329 17.8209 2.5 12.5742 2.5C7.32751 2.5 3.07422 6.75329 3.07422 12C3.07422 17.2467 7.32751 21.5 12.5742 21.5ZM12.5742 23C18.6494 23 23.5742 18.0751 23.5742 12C23.5742 5.92487 18.6494 1 12.5742 1C6.49909 1 1.57422 5.92487 1.57422 12C1.57422 18.0751 6.49909 23 12.5742 23Z"
          fill={'#D7D7D7'}
          fillRule="evenodd"
        />
      )}
      <path
        clipRule="evenodd"
        d="M17.1485 8.86645C16.8087 8.56473 16.2809 8.57975 15.9605 8.90355L11.5867 13.3234L9.19946 10.8105C8.88544 10.48 8.35797 10.4555 8.0125 10.75C7.65608 11.0539 7.62432 11.585 7.94867 11.9264L10.9487 15.0843C11.1097 15.2538 11.334 15.3477 11.5656 15.35C11.7972 15.3522 12.0232 15.2626 12.1876 15.0965L17.1876 10.0439C17.5185 9.70946 17.499 9.17783 17.1485 8.86645Z"
        fill={checked ? '#fff' : '#fff'}
        fillRule="evenodd"
      />
    </svg>
  );
};
