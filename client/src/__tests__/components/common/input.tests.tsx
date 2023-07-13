import { render, screen, act } from '@testing-library/react';
import { Input } from '@components/common/input/Input';
import userEvent from '@testing-library/user-event';

describe('UI Component - Input Component', () => {
  const user = userEvent.setup();

  test('Type Checkbox에 클릭했을 때 checked 변화가 확인 되는지', async () => {
    const inputType = 'checkbox';
    let isChecked = false;
    const label = 'Input Checkbox';

    render(
      <Input
        type={inputType}
        id={label}
        label={label}
        onChange={(e) => (isChecked = e.target.checked)}
      />,
    );
    const input = screen.getByRole('checkbox');

    await act(async () => {
      // Check input 을 클릭 했을 때 true 값 반환하는지 확인  clear()` is only supported on editable elements.
      await user.click(input);
      expect(isChecked).toBeTruthy();

      // checked 되어있는 값을 label을 클릭했을 경우 check 해제 되는지 확인
      const labelElement = screen.getByText(label);
      await user.click(labelElement);
      expect(isChecked).toBeFalsy();
    });
  });

  test('Type Text 에서 value가 입력한 값을 반환하는지 확인', async () => {
    let initialText = '전다훈 INPUT Test - Type Text';
    const expectedKeyword = '전다훈 INPUT Test - Type Text';
    const inputType = 'text';

    render(
      <Input
        value={initialText}
        type={inputType}
        onChange={(e) => (initialText = e.target.value)}
      />,
    );
    const input = screen.getByRole('textbox') as HTMLInputElement;

    await act(async () => {
      await user.clear(input);
      await user.type(input, expectedKeyword);
      expect(input.value).toEqual(expectedKeyword);
    });
  });
});
