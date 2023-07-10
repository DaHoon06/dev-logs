import { SelectBox } from '@components/common/selectbox/SelectBox';
import { render, screen, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

const selectBoxInitialState = [
  { id: 5001, text: '첫 번째 답변입니다' },
  { id: 5002, text: '두 번째 답변입니다' },
  { id: 5003, text: '세 번째 답변입니다' },
];

describe('UI Component - SelectBox Component', () => {
  const user = userEvent;
  const id = 'select';

  test('Select Box 기본 값은 "선택" 이라는 빈 값', () => {
    render(<SelectBox id={id} options={selectBoxInitialState} />);
    // 초기 값의 경우 "선택"
    const selectBox = screen.getByRole('option', { name: '선택' }) as HTMLOptionElement;
    expect(selectBox.selected).toBe(true);
  });

  test('Select Option "두 번째 답변입니다." 선택', () => {
    const id = 'select';
    const expectedValue = '두 번째 답변입니다';
    let returnText = '';

    render(
      <SelectBox
        id={id}
        options={selectBoxInitialState}
        onChange={(e) => (returnText = e.target.value)}
      />,
    );
    // 2 번째 옵션 선택
    act(() => {
      user.selectOptions(
        screen.getByRole('combobox'),
        screen.getByRole('option', { name: expectedValue }),
      );

      // 결과 값 확인
      const selectBox = screen.getByRole('option', { name: expectedValue }) as HTMLOptionElement;
      expect(selectBox.selected).toBeTruthy();
      expect(returnText).toBe(expectedValue);
    });
  });
});
