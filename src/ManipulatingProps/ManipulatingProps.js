import React, { Component } from 'react';
import { getLoggedInUser } from '../utils';

/*
  Манипуляция пропами

  Первый HOC который нужно написать - enchancer.
  
  Он будет принимать проп loading и в зависимости
  от его значения показывать прелоадер,
  или обёрнутый компонент
*/

const LoadingSpinner = () => <div>Loading...</div>;

export const withLoading = WrappedComponent => {
  const WithLoading = props => {
    const { loading } = props;
    return loading ? LoadingSpinner() : <WrappedComponent {...props} />;
  };
  return WithLoading;
};

/*
  Следующий HOC - injector, его особенность в том,
  что он не даёт перезаписать проп, который передаёт
  в оборачиваемый компонент

  Нужно написать HOC, который передаст авторизованного
  пользователя через проп user

  Чтобы получить текущего пользователя - используйте
  метод `getLoggedInUser` из `utils`

  const user = getLoggedInUser()
*/

export const addLoggedInUser = WrappedComponent => {
  const AddLoggedInUser = ({ user, ...rest }) => {
    const newUser = getLoggedInUser();
    return <WrappedComponent user={newUser} {...rest} />;
  };
  return AddLoggedInUser;
};

/*
  Помимо добавления новых пропов можно модифицировать те,
  что уже были переданы в компонент

  Мы будем передавать во WrappedComponent список книг
  [{title: "Harry Potter", author: "J. K. Rowling"}, ...]

  Ваша задача написать HOC, который перехватит prop books,
  отсортирует по названиям по алфавиту
  и передаст в обёрнутый компонент
*/

export const withSort = WrappedComponent => {
  const WithSort = ({ books, ...rest }) => {
    books.sort((a, b) => {
      if (a.title < b.title) return -1;
      if (a.title > b.title) return 1;
      return 0;
    });
    return <WrappedComponent books={books} {...rest} />;
  };
  return WithSort;
};
