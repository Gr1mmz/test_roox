import React, {useState} from "react";
import {IUser, UserSubmitForm} from "../../../types/types";
import {useForm} from "../../../hooks/useForm";
import Button from "../../UI/Button/Button";
import Input from "../../UI/Input/Input";
import classes from "./User.module.scss";

interface UserProps {
    user: IUser | null,
}

const User: React.FC<UserProps> = ({user}) => {
    const [disabled, setDisabled] = useState(true);

    const {handleSubmit, handleChange, data, errors} = useForm<UserSubmitForm>({
        initialValues: {
            name: user ? user.name : "",
            username: user ? user.username : "",
            email: user ? user.email : "",
            street: user ? user.address.street : "",
            city: user ? user.address.city : "",
            zipcode: user ? user.address.zipcode : "",
            phone: user ? user.phone : "",
            website: user ? user.website : "",
            comment: "",
        },
        validations: {
            name: {
                pattern: {
                    value: "^[A-zА-яЁё ]+$",
                    message: "Можно использовать только буквы"
                }
            },
            username: {
                pattern: {
                    value: "^[A-z0-9_-]{3,16}$",
                    message: "Можно использовать только латиницу, цифры, знаки _ и -. Длина должна быть от 3 до 16 символов"
                }
            },
            email: {
                pattern: {
                    value: "^([A-Za-z0-9_\\-\\.])+\\@([A-Za-z0-9_\\-\\.])+\\.([A-Za-z]{2,4})$",
                    message: "Необходимо указать e-mail формата name@mail.com"
                }
            },
            street: {
                pattern: {
                    value: "^[A-zА-яЁё ]+$",
                    message: "Можно использовать только буквы"
                }
            },
            city: {
                pattern: {
                    value: "^[A-zА-яЁё 0-9\\-]+$",
                    message: "Можно использовать только буквы, цифры, символы тире и пробела"
                }
            },
            zipcode: {
                pattern: {
                    value: "^\\d{6}$",
                    message: "Введите почтовый индекс в формате 123456"
                }
            },
            phone: {
                pattern: {
                    value: "^(\\s*)?(\\+)?([- _():=+]?\\d[- _():=+]?){10,14}(\\s*)?$",
                    message: "Введите корректный номер мобильного телефона"
                }
            },
            website: {
                pattern: {
                    value: "[-a-zA-Z0-9@:%_\\+.~#?&\\/=]{2,256}\\.[a-z]{2,4}\\b(\\/[-a-zA-Z0-9@:%_\\+.~#?&\\/=]*)?",
                    message: "Введите корректный адрес сайта"
                }
            }
        },
        onSubmit: () => console.log(JSON.stringify(data)),
    });

    if (user) {
        return (
            <div className={classes.user}>
                <div className={classes.header}>
                    <h2>Профиль пользователя</h2>
                    <Button onClick={() => setDisabled(prevState => !prevState)}>Редактировать</Button>
                </div>
                <form className={classes.info} onSubmit={handleSubmit}>
                    <div className={classes.inputsWrapper}>
                        <Input
                            {...data.name} error={errors.name}
                            value={data.name} type={"text"} label={"Имя"}
                            onChange={handleChange('name')}
                            id={"name"} disabled={disabled} required
                        />
                        <Input
                            {...data.username} error={errors.username}
                            value={data.username} type={"text"} label={"User name"}
                            onChange={handleChange('username')}
                            id={"username"} disabled={disabled} required
                        />
                        <Input
                            {...data.email} error={errors.email}
                            value={data.email} type={"text"} label={"E-mail"}
                            onChange={handleChange('email')}
                            id={"email"} disabled={disabled} required
                        />
                        <Input
                            {...data.street} error={errors.street}
                            value={data.street} type={"text"} label={"Street"}
                            onChange={handleChange("street")}
                            id={"street"} disabled={disabled} required
                        />
                        <Input
                            {...data.city} error={errors.city}
                            value={data.city} type={"text"} label={"City"}
                            onChange={handleChange("city")}
                            id={"city"} disabled={disabled} required
                        />
                        <Input
                            {...data.zipcode} error={errors.zipcode}
                            value={data.zipcode} type={"text"} label={"Zip code"}
                            onChange={handleChange("zipcode")}
                            id={"zipcode"} disabled={disabled} required
                        />
                        <Input
                            {...data.phone} error={errors.phone}
                            value={data.phone} type={"tel"} label={"Phone"}
                            onChange={handleChange("phone")}
                            id={"phone"} disabled={disabled} required
                        />
                        <Input
                            {...data.website} error={errors.website}
                            value={data.website} type={"text"} label={"Website"}
                            onChange={handleChange("website")}
                            id={"website"} disabled={disabled} required
                        />
                        <Input
                            {...data.comment}
                            value={data.comment} type={"textarea"} label={"Comment"}
                            onChange={handleChange("comment")}
                            id={"comment"} disabled={disabled}
                        />
                    </div>
                    <Button success disabled={disabled} type="submit">Отправить</Button>
                </form>
            </div>
        );
    }
    return (
        <div className={classes.user}>
            <div className={classes.header}>
                <h2>Пользователь не найден</h2>
            </div>
        </div>
    )
};

export default User;