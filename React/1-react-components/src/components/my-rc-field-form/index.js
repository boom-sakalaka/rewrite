/*
 * @Author: GZH
 * @Date: 2021-09-23 20:16:05
 * @LastEditors: GZH
 * @LastEditTime: 2021-09-23 20:29:23
 * @FilePath: \rewrite\React\1-react-components\src\components\my-rc-field-form\index.js
 * @Description:
 */
import _Form from './Form';
import Field from './Field';
import useForm from './useForm';

const Form = _Form;
Form.useForm = useForm;

export { useForm, Field };
export default Form;
