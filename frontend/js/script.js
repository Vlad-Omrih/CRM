const listData = [
];

let sortColumnFlag = 'fio';
let sortDirFlag = true;
let sortIdDirFlag = true;
let sortFioDirFlag = true;
let sortCreatedDirFlag = true;
let sortUpdatedDirFlag = true;

const $body = document.body;
const $modalWrapper = document.createElement('div');
const $overlay = document.createElement('div');
const $delWindow = document.createElement('div');
const $delTitle = document.createElement('h3');
const $delDescr = document.createElement('p');
const $delUserBtn = document.createElement('button');
const $delCancelBtn = document.createElement('button');
const $closeBtn = document.createElement('button');
const $blackLayer = document.createElement('div');
const $addClient = document.createElement('div');
const $addClientHeader = document.createElement('div');
const $addClientTop = document.createElement('div');
const $addClientTitle = document.createElement('h2');
const $addClientId = document.createElement('p');
const $addClientBottom = document.createElement('div');
const $addClientSurname = document.createElement('p');
const $addClientSurnameInput = document.createElement('input');
const $addFloatingSurnameLabel = document.createElement('label');
const $changeFloatingSurnameLabel = document.createElement('label');
const $addClientName = document.createElement('p');
const $addFloatingNameInput = document.createElement('div');
const $changeFloatingNameInput = document.createElement('div');
const $addFloatingLastnameInput = document.createElement('div');
const $changeFloatingLastnameInput = document.createElement('div');
const $addFloatingSurnameInput = document.createElement('div');
const $changeFloatingSurnameInput = document.createElement('div');
const $addClientNameInput = document.createElement('input');
const $addFloatingNameLabel = document.createElement('label');
const $changeFloatingNameLabel = document.createElement('label');
const $addClientLastname = document.createElement('p');
const $addClientLastnameInput = document.createElement('input');
const $addFloatingLastnameLabel = document.createElement('label');
const $changeFloatingLastnameLabel = document.createElement('label');
const $addClientAddContactBtn = document.createElement('button');
const $addClientGroupBtn = document.createElement('div');
const $addClientSaveBtn = document.createElement('button');
const $addClientRemoveBtn = document.createElement('button');
const $addClientAddContactBtnCont = document.createElement('div');
const $changeClientAddContactBtnCont = document.createElement('div');

$changeClientAddContactBtnCont.classList.add('contact__container');
$addClientAddContactBtnCont.classList.add('contact__container');
$addFloatingNameInput.classList.add('form-floating');
$addFloatingSurnameInput.classList.add('form-floating');
$addFloatingLastnameInput.classList.add('form-floating');
$changeFloatingNameInput.classList.add('form-floating');
$changeFloatingSurnameInput.classList.add('form-floating');
$changeFloatingLastnameInput.classList.add('form-floating');
$blackLayer.classList.add('black-layer');
$modalWrapper.classList.add('modal-wrapper');
$overlay.classList.add('overlay');
$delWindow.classList.add('del-window');
$delTitle.classList.add('del-window__title');
$delDescr.classList.add('del-window__descr');
$delUserBtn.classList.add('btn--action');
$delCancelBtn.classList.add('btn--cancel');
$closeBtn.classList.add('btn--close');
$addClient.classList.add('client-form');
$addClientHeader.classList.add('client-form__header');
$addClientTop.classList.add('client-form-top');
$addClientTitle.classList.add('client-form__title');
$addClientId.classList.add('client-form__id');
$addClientBottom.classList.add('client-form-bottom');
$addClientSurname.classList.add('client-form__subtitle', 'important-input');
$addClientSurnameInput.classList.add('client-form__input', 'add-client-form__input', 'form-control');
$addClientName.classList.add('client-form__subtitle', 'important-input');
$addClientNameInput.classList.add('client-form__input', 'add-client-form__input', 'form-control');
$addClientLastname.classList.add('client-form__subtitle');
$addClientLastnameInput.classList.add('client-form__input', 'add-client-form__input', 'form-control');
$addClientAddContactBtn.classList.add('client-form__btn');
$addClientGroupBtn.classList.add('group-btn');
$addClientSaveBtn.classList.add('btn--action');
$addClientRemoveBtn.classList.add('btn--cancel');
$addFloatingNameLabel.classList.add('important-input');
$addFloatingSurnameLabel.classList.add('important-input');
$changeFloatingNameLabel.classList.add('important-input');
$changeFloatingSurnameLabel.classList.add('important-input');

$addFloatingNameLabel.setAttribute('for', 'floatingName');
$addFloatingLastnameLabel.setAttribute('for', 'floatingLastname');
$addFloatingSurnameLabel.setAttribute('for', 'floatingSurname');
$changeFloatingNameLabel.setAttribute('for', 'floatingName');
$changeFloatingLastnameLabel.setAttribute('for', 'floatingLastname');
$changeFloatingSurnameLabel.setAttribute('for', 'floatingSurname');

$addClientNameInput.id = 'floatingName';
$addClientLastnameInput.id = 'floatingLastname';
$addClientSurnameInput.id = 'floatingSurname';

$addFloatingNameLabel.textContent = 'Имя';
$addFloatingLastnameLabel.textContent = 'Отчество';
$addFloatingSurnameLabel.textContent = 'Фамилия';
$changeFloatingNameLabel.textContent = 'Имя';
$changeFloatingLastnameLabel.textContent = 'Отчество';
$changeFloatingSurnameLabel.textContent = 'Фамилия';

$addClientTitle.textContent = 'Новый клиент';
$addClientSurname.textContent = 'Фамилия';
$addClientName.textContent = 'Имя';
$addClientLastname.textContent = 'Отчество';
$addClientAddContactBtn.textContent = 'Добавить контакт';
$addClientSaveBtn.textContent = 'Сохранить';
$addClientRemoveBtn.textContent = 'Отмена';
$delTitle.textContent = 'Удалить клиента';
$delDescr.textContent = 'Вы действительно хотите удалить данного клиента?';
$delUserBtn.textContent = 'Удалить';
$delCancelBtn.textContent = 'Отмена';
$closeBtn.textContent = '';

$addClientSurnameInput.placeholder = 'Фамилия';
$addClientNameInput.placeholder = 'Имя';
$addClientLastnameInput.placeholder = 'Отчество';

const $tableBody = document.getElementById('tbody');
const $tableHeadThId = document.getElementById('sort__id');
const $tableHeadThFio = document.getElementById('sort__fio');
const $tableHeadThCreatedAt = document.getElementById('sort__createdAt');
const $tableHeadThUpdatedAt = document.getElementById('sort__updatedAt');
const $tableHeadThIdArrow = document.getElementById('arrow-id');
const $tableHeadThFioArrow = document.getElementById('arrow-fio');
const $tableHeadThFioDescrArrow = document.getElementById('arrow__descr');
const $tableHeadThCreatedAtArrow = document.getElementById('arrow-created');
const $tableHeadThUpdatedAtArrow = document.getElementById('arrow-updated');
const $addUserBtn = document.getElementById('btn__add-user');
const $filterInput = document.getElementById('filter-input');

const rowSort = $tableHeadThFioDescrArrow.textContent;
const rowSortArr = [...rowSort];

// Получение типа и значения контактов
function getContactsArr() {
  const contactsArr = [];
  const contactTypes = document.querySelectorAll('.form-select');
  const contactValues = document.querySelectorAll('.add-input');

  contactTypes.forEach((el) => {
    contactsArr.push({ type: el.value });
  });

  for (let i = 0; i < contactValues.length; ++i) contactsArr[i].value = contactValues[i].value;
  return contactsArr;
}

// рендер
async function render() {
  const response = await fetch('http://localhost:3000/api/clients');
  const clientItemList = await response.json();
  let copyListData = [...clientItemList];
  $tableBody.innerHTML = '';

  // Подготовка
  for (const oneUser of copyListData) {
    const firstName = oneUser.name.substring(0, 1);
    const lastName = oneUser.name.substring(1);
    const firstMiddle = oneUser.surname.substring(0, 1);
    const lastMiddle = oneUser.surname.substring(1);
    const firstlastname = oneUser.lastName.substring(0, 1);
    const lastlastname = oneUser.lastName.substring(1);
    const rightName = (firstName.toUpperCase() + lastName.toLowerCase());
    const rightMiddle = (firstMiddle.toUpperCase() + lastMiddle.toLowerCase());
    const rightlastname = (firstlastname.toUpperCase() + lastlastname.toLowerCase());

    oneUser.fio = `${rightMiddle} ${rightName}  ${rightlastname}`;
  }

  // Сортировка
  // eslint-disable-next-line array-callback-return, consistent-return
  copyListData = copyListData.sort((a, b) => {
    let sort = a[sortColumnFlag] < b[sortColumnFlag];
    if (sortDirFlag === false) {
      sort = a[sortColumnFlag] > b[sortColumnFlag];
    }
    if (sort) return -1;
  });

  // Фильтрация

  if ($filterInput.value.trim() !== '') {
    // eslint-disable-next-line no-use-before-define
    copyListData = filter(copyListData, 'fio', $filterInput.value);
  }

  // Отрисовка
  for (const oneUser of copyListData) {
    // eslint-disable-next-line no-use-before-define
    const $newTr = createUserTr(oneUser);
    $tableBody.append($newTr);
  }

  const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
  // eslint-disable-next-line prefer-arrow-callback
  tooltipTriggerList.map(function tooltip(tooltipTriggerEl) {
    // eslint-disable-next-line no-undef
    return new bootstrap.Tooltip(tooltipTriggerEl);
  });
}
render(listData);

// создание юзера
function createUserTr(oneUser) {
  const $userTr = document.createElement('tr');
  const $userId = document.createElement('th');
  const $userName = document.createElement('th');
  const $userCreatedTh = document.createElement('th');
  const $userCreatedCont = document.createElement('div');
  const $userCreatedAt = document.createElement('div');
  const $userCreatedTime = document.createElement('div');
  const $userUpdatedTh = document.createElement('th');
  const $userUpdatedCont = document.createElement('div');
  const $userUpdatedAt = document.createElement('div');
  const $userUpdatedTime = document.createElement('div');
  const $userContactsTh = document.createElement('th');
  const $userContacts = document.createElement('div');
  const $changeTh = document.createElement('th');
  const $changeThCont = document.createElement('div');
  const $changeBtn = document.createElement('button');
  const $delBtn = document.createElement('button');
  const $changeClient = document.createElement('div');
  const $changeClientHeader = document.createElement('div');
  const $changeClientTop = document.createElement('div');
  const $changeClientTitle = document.createElement('h2');
  const $changeClientId = document.createElement('p');
  const $changeClientBottom = document.createElement('div');
  const $changeClientSurname = document.createElement('p');
  const $changeClientSurnameInput = document.createElement('input');
  const $changeClientName = document.createElement('p');
  const $changeClientNameInput = document.createElement('input');
  const $changeClientLastname = document.createElement('p');
  const $changeClientLastnameInput = document.createElement('input');
  const $changeClientAddContactBtn = document.createElement('button');
  const $changeClientGroupBtn = document.createElement('div');
  const $changeClientSaveBtn = document.createElement('button');
  const $changeClientRemoveBtn = document.createElement('div');

  $userCreatedCont.classList.add('data');
  $userUpdatedCont.classList.add('data');
  $changeThCont.classList.add('change');
  $userContacts.classList.add('contacts');
  $changeClient.classList.add('client-form');
  $changeClientHeader.classList.add('client-form__header');
  $changeClientTop.classList.add('client-form-top');
  $changeClientTitle.classList.add('client-form__title');
  $changeClientId.classList.add('client-form__id');
  $changeClientBottom.classList.add('client-form-bottom');
  $changeClientSurname.classList.add('client-form__subtitle', 'important-input');
  $changeClientSurnameInput.classList.add('client-form__input', 'form-control');
  $changeClientName.classList.add('client-form__subtitle', 'important-input');
  $changeClientNameInput.classList.add('client-form__input', 'form-control');
  $changeClientLastname.classList.add('client-form__subtitle');
  $changeClientLastnameInput.classList.add('client-form__input', 'form-control');
  $changeClientAddContactBtn.classList.add('client-form__btn');
  $changeClientGroupBtn.classList.add('group-btn');
  $changeClientSaveBtn.classList.add('btn--action');
  $changeClientRemoveBtn.classList.add('btn--cancel');
  $changeClientNameInput.id = 'floatingName';
  $changeClientLastnameInput.id = 'floatingLastname';
  $changeClientSurnameInput.id = 'floatingSurname';
  $changeClientTitle.textContent = 'Изменить данные';
  $changeClientSurname.textContent = 'Фамилия';
  $changeClientName.textContent = 'Имя';
  $changeClientLastname.textContent = 'Отчество';
  $changeClientAddContactBtn.textContent = 'Добавить контакт';
  $changeClientSaveBtn.textContent = 'Сохранить';
  $changeClientRemoveBtn.textContent = 'Удалить клиента';
  $changeClientSurnameInput.placeholder = 'Фамилия';
  $changeClientNameInput.placeholder = 'Имя';
  $changeClientLastnameInput.placeholder = 'Отчество';

  $userId.classList.add('grey-descr');
  $userCreatedTime.classList.add('grey-descr');
  $userUpdatedTime.classList.add('grey-descr');
  $changeBtn.classList.add('btn', 'change-btn');
  $delBtn.classList.add('btn', 'del-btn');

  // отрисовка контактов
  $userId.textContent = oneUser.id;
  $userName.textContent = oneUser.fio;
  $userCreatedAt.textContent = `${oneUser.createdAt.substring(8, 10)}.${oneUser.createdAt.substring(5, 7)}.${oneUser.createdAt.substring(0, 4)}`;
  $userCreatedTime.textContent = `${oneUser.createdAt.substring(11, 16)}`;
  $userUpdatedAt.textContent = `${oneUser.updatedAt.substring(8, 10)}.${oneUser.updatedAt.substring(5, 7)}.${oneUser.updatedAt.substring(0, 4)}`;
  $userUpdatedTime.textContent = `${oneUser.updatedAt.substring(11, 16)}`;
  $changeBtn.textContent = 'Изменить';
  $delBtn.textContent = 'Удалить';
  const $addMoreBtn = document.createElement('div');
  const $userContactsArr = oneUser.contacts;

  for (const contactItem1 of $userContactsArr) {
    const $addVkIcon = document.createElement('div');
    const $addFbIcon = document.createElement('div');
    const $addTelIcon = document.createElement('div');
    const $addMailIcon = document.createElement('div');
    const $addAdTelIcon = document.createElement('div');

    $addVkIcon.setAttribute('data-bs-toggle', 'tooltip');
    $addVkIcon.setAttribute('data-bs-placement', 'top');
    $addFbIcon.setAttribute('data-bs-toggle', 'tooltip');
    $addFbIcon.setAttribute('data-bs-placement', 'top');
    $addTelIcon.setAttribute('data-bs-toggle', 'tooltip');
    $addTelIcon.setAttribute('data-bs-placement', 'top');
    $addMailIcon.setAttribute('data-bs-toggle', 'tooltip');
    $addMailIcon.setAttribute('data-bs-placement', 'top');
    $addAdTelIcon.setAttribute('data-bs-toggle', 'tooltip');
    $addAdTelIcon.setAttribute('data-bs-placement', 'top');
    $addVkIcon.classList.add('contact__vk-icon', 'contact__icon');
    $addFbIcon.classList.add('contact__fb-icon', 'contact__icon');
    $addMailIcon.classList.add('contact__mail-icon', 'contact__icon');
    $addTelIcon.classList.add('contact__tel-icon', 'contact__icon');
    $addAdTelIcon.classList.add('contact__ad-tel-icon', 'contact__icon');

    $addVkIcon.textContent = '';

    if ($userContactsArr.indexOf(contactItem1) <= 2) {
      if (contactItem1.type === 'tel') {
        $userContacts.append($addTelIcon);
        $addTelIcon.setAttribute('title', contactItem1.value);
      }
      if (contactItem1.type === 'vk') {
        $userContacts.append($addVkIcon);
        $addVkIcon.setAttribute('title', contactItem1.value);
      }
      if (contactItem1.type === 'fb') {
        $userContacts.append($addFbIcon);
        $addFbIcon.setAttribute('title', contactItem1.value);
      }
      if (contactItem1.type === 'mail') {
        $userContacts.append($addMailIcon);
        $addMailIcon.setAttribute('title', contactItem1.value);
      }
      if (contactItem1.type === 'adTel') {
        $userContacts.append($addAdTelIcon);
        $addAdTelIcon.setAttribute('title', contactItem1.value);
      }
    } else if ($userContactsArr.indexOf(contactItem1) >= 2) {
      $addMoreBtn.classList.add('contact__more-btn', 'contact__icon');
      $addMoreBtn.textContent = `+${$userContactsArr.length - 3}`;
      $userContacts.append($addMoreBtn);
      break;
    }
  }

  $addMoreBtn.addEventListener('click', () => {
    for (const contactItem of $userContactsArr) {
      $addMoreBtn.remove();
      const $addVkIcon = document.createElement('div');
      const $addFbIcon = document.createElement('div');
      const $addTelIcon = document.createElement('div');
      const $addMailIcon = document.createElement('div');
      const $addAdTelIcon = document.createElement('div');

      $addVkIcon.setAttribute('data-bs-toggle', 'tooltip');
      $addVkIcon.setAttribute('data-bs-placement', 'top');
      $addFbIcon.setAttribute('data-bs-toggle', 'tooltip');
      $addFbIcon.setAttribute('data-bs-placement', 'top');
      $addTelIcon.setAttribute('data-bs-toggle', 'tooltip');
      $addTelIcon.setAttribute('data-bs-placement', 'top');
      $addMailIcon.setAttribute('data-bs-toggle', 'tooltip');
      $addMailIcon.setAttribute('data-bs-placement', 'top');
      $addAdTelIcon.setAttribute('data-bs-toggle', 'tooltip');
      $addAdTelIcon.setAttribute('data-bs-placement', 'top');
      $addVkIcon.classList.add('contact__vk-icon', 'contact__icon');
      $addFbIcon.classList.add('contact__fb-icon', 'contact__icon');
      $addMailIcon.classList.add('contact__mail-icon', 'contact__icon');
      $addTelIcon.classList.add('contact__tel-icon', 'contact__icon');
      $addAdTelIcon.classList.add('contact__ad-tel-icon', 'contact__icon');

      $addVkIcon.textContent = '';

      if ($userContactsArr.indexOf(contactItem) > 2) {
        if (contactItem.type === 'tel') {
          $userContacts.append($addTelIcon);
          $addTelIcon.setAttribute('title', contactItem.value);
        }
        if (contactItem.type === 'vk') {
          $userContacts.append($addVkIcon);
          $addVkIcon.setAttribute('title', contactItem.value);
        }
        if (contactItem.type === 'fb') {
          $userContacts.append($addFbIcon);
          $addFbIcon.setAttribute('title', contactItem.value);
        }
        if (contactItem.type === 'mail') {
          $userContacts.append($addMailIcon);
          $addMailIcon.setAttribute('title', contactItem.value);
        }
        if (contactItem.type === 'adTel') {
          $userContacts.append($addAdTelIcon);
          $addAdTelIcon.setAttribute('title', contactItem.value);
        }
      }
      const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
      // eslint-disable-next-line no-loop-func, no-undef
      tooltipTriggerList.map((tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl));
    }
  });

  $userTr.append($userId);
  $userTr.append($userName);
  $userTr.append($userCreatedTh);
  $userCreatedTh.append($userCreatedCont);
  $userCreatedCont.append($userCreatedAt);
  $userCreatedCont.append($userCreatedTime);
  $userTr.append($userUpdatedTh);
  $userUpdatedTh.append($userUpdatedCont);
  $userUpdatedCont.append($userUpdatedAt);
  $userUpdatedCont.append($userUpdatedTime);
  $userTr.append($userContactsTh);
  $userTr.append($changeTh);
  $changeTh.append($changeThCont);
  $userContactsTh.append($userContacts);
  $changeThCont.append($changeBtn);
  $changeThCont.append($delBtn);

  // создание окна изменение юзера
  $changeBtn.addEventListener('click', () => {
    $body.append($changeClient);
    $body.append($blackLayer);
    $changeClient.append($changeClientHeader);
    $changeClientHeader.append($changeClientTop);
    $changeClientHeader.append($changeClientBottom);
    $changeClientTop.append($changeClientTitle);
    $changeClientTop.append($changeClientId);
    $changeClientBottom.append($changeFloatingSurnameInput);
    $changeFloatingSurnameInput.append($changeClientSurnameInput);
    $changeFloatingSurnameInput.append($changeFloatingSurnameLabel);
    $changeClientBottom.append($changeFloatingNameInput);
    $changeFloatingNameInput.append($changeClientNameInput);
    $changeFloatingNameInput.append($changeFloatingNameLabel);
    $changeClientBottom.append($changeFloatingLastnameInput);
    $changeFloatingLastnameInput.append($changeClientLastnameInput);
    $changeFloatingLastnameInput.append($changeFloatingLastnameLabel);
    $changeClient.append($addClientAddContactBtnCont);
    $addClientAddContactBtnCont.append($addClientAddContactBtn);
    $changeClient.append($changeClientGroupBtn);
    $changeClientGroupBtn.append($changeClientSaveBtn);
    $changeClientGroupBtn.append($changeClientRemoveBtn);
    $changeClient.append($closeBtn);

    $changeClientId.textContent = `ID: ${oneUser.id}`;
    $changeClientSurnameInput.value = oneUser.surname;
    $changeClientNameInput.value = oneUser.name;
    $changeClientLastnameInput.value = oneUser.lastName;

    // закрыть окно юзера
    $closeBtn.addEventListener('click', () => {
      $changeClient.remove();
      $blackLayer.remove();
      $changeClientSurnameInput.remove();
      $changeClientLastnameInput.remove();
      $changeClientNameInput.remove();
    });

    $changeClientRemoveBtn.addEventListener('click', async () => {
      $changeClient.remove();
      $blackLayer.remove();
      $changeClientSurnameInput.remove();
      $changeClientLastnameInput.remove();
      $changeClientNameInput.remove();
      await fetch(`http://localhost:3000/api/clients/${oneUser.id}`, {
        method: 'DELETE',
      });
      render(listData);
    });

    // сохранения изменений
    $changeClientSaveBtn.addEventListener('click', async () => {
      const response = await fetch(`http://localhost:3000/api/clients/${oneUser.id}`, {
        method: 'PATCH',
        body: JSON.stringify({
          name: $changeClientNameInput.value.trim(),
          surname: $changeClientSurnameInput.value.trim(),
          lastName: $changeClientLastnameInput.value.trim(),
          contacts: getContactsArr(),
        }),
        headers: {
          'content-type': 'application/json',
        },
      });
      const newClientItem = await response.json();
      $changeClientSurnameInput.remove();
      $changeClientLastnameInput.remove();
      $changeClientNameInput.remove();
      $changeClient.remove();
      $blackLayer.remove();
      listData.push(newClientItem);
      render(listData);
    });

    // отрисовка контактов в окне изменения
    for (const contactItem of oneUser.contacts) {
      const $changeContactInpGrp = document.createElement('div');
      const $changeContactInp = document.createElement('input');
      const $changeOptionTel = document.createElement('option');
      const $changeOptionAdTel = document.createElement('option');
      const $changeOptionMail = document.createElement('option');
      const $changeOptionVk = document.createElement('option');
      const $changeOptionFb = document.createElement('option');
      const $changeSelectCloseBtnMod = document.createElement('div');
      const $changeSelectCloseBtn = document.createElement('button');
      const $changeSelect = document.createElement('select');
      $changeContactInpGrp.classList.add('input-group');
      $changeContactInp.classList.add('form-control', 'add-input');
      $changeSelect.classList.add('form-select', 'input-group-text');
      $changeSelectCloseBtnMod.classList.add('input-group-text');
      $changeSelectCloseBtn.classList.add('btn-close');

      $changeOptionTel.setAttribute('value', 'tel');
      $changeOptionAdTel.setAttribute('value', 'adTel');
      $changeOptionMail.setAttribute('value', 'mail');
      $changeOptionVk.setAttribute('value', 'vk');
      $changeOptionFb.setAttribute('value', 'fb');

      $changeOptionTel.textContent = 'Телефон';
      $changeOptionAdTel.textContent = 'Доп. телефон';
      $changeOptionMail.textContent = 'Email';
      $changeOptionVk.textContent = 'Vk';
      $changeOptionFb.textContent = 'Facebook';

      $addClientAddContactBtnCont.prepend($changeContactInpGrp);
      $changeContactInpGrp.append($changeSelect);
      $changeContactInpGrp.append($changeContactInp);
      $changeContactInpGrp.append($changeSelectCloseBtnMod);
      $changeSelectCloseBtnMod.append($changeSelectCloseBtn);
      $changeSelect.append($changeOptionTel);
      $changeSelect.append($changeOptionAdTel);
      $changeSelect.append($changeOptionMail);
      $changeSelect.append($changeOptionVk);
      $changeSelect.append($changeOptionFb);
      if (contactItem.type === 'tel') {
        $changeOptionTel.setAttribute('selected', '');
        $changeContactInp.value = contactItem.value;
      } else if (contactItem.type === 'vk') {
        $changeOptionVk.setAttribute('selected', '');
        $changeContactInp.value = contactItem.value;
      } else if (contactItem.type === 'fb') {
        $changeOptionFb.setAttribute('selected', '');
        $changeContactInp.value = contactItem.value;
      } else if (contactItem.type === 'mail') {
        $changeOptionMail.setAttribute('selected', '');
        $changeContactInp.value = contactItem.value;
      } else if (contactItem.type === 'adTel') {
        $changeOptionAdTel.setAttribute('selected', '');
        $changeContactInp.value = contactItem.value;
      } else {
        break;
      }
      $changeClientSaveBtn.addEventListener('click', () => {
        $changeContactInpGrp.remove();
      });
      $changeBtn.addEventListener('click', () => {
        $changeContactInpGrp.remove();
      });
      $changeSelectCloseBtn.addEventListener('click', () => {
        $changeContactInpGrp.remove();
      });
      $closeBtn.addEventListener('click', () => {
        $changeContactInpGrp.remove();
      });
    }
  });

  // удаление юзера
  $delBtn.addEventListener('click', () => {
    $body.append($modalWrapper);
    $body.append($blackLayer);
    $modalWrapper.append($delWindow);
    $delWindow.append($delTitle);
    $delWindow.append($delDescr);
    $delWindow.append($delUserBtn);
    $delWindow.append($delCancelBtn);
    $delWindow.append($closeBtn);
    $delUserBtn.addEventListener('click', async () => {
      $delWindow.remove();
      $blackLayer.remove();
      await fetch(`http://localhost:3000/api/clients/${oneUser.id}`, {
        method: 'DELETE',
      });
      render(listData);
    });
    $delCancelBtn.addEventListener('click', async () => {
      $delWindow.remove();
      $blackLayer.remove();
    });
    $closeBtn.addEventListener('click', async () => {
      $delWindow.remove();
      $blackLayer.remove();
    });
  });

  return $userTr;
}

// Функция фильтрации
function filter(arr, prop, value) {
  // eslint-disable-next-line array-callback-return, consistent-return
  return arr.filter((oneUser) => {
    if (oneUser[prop].includes(value.trim())) return true;
  });
}

$tableHeadThId.addEventListener('click', () => {
  sortColumnFlag = 'id';
  sortDirFlag = !sortDirFlag;
  sortIdDirFlag = !sortIdDirFlag;
  $tableHeadThIdArrow.classList.add('arrow--click');
  if (sortIdDirFlag) {
    $tableHeadThIdArrow.classList.remove('arrow--click');
  }
  render(listData);
});

$tableHeadThFio.addEventListener('click', () => {
  sortColumnFlag = 'fio';
  sortDirFlag = !sortDirFlag;
  sortFioDirFlag = !sortFioDirFlag;
  $tableHeadThFioArrow.classList.add('arrow--click');
  $tableHeadThFioDescrArrow.textContent = rowSortArr.reverse().join('');
  if (sortFioDirFlag) {
    $tableHeadThFioArrow.classList.remove('arrow--click');
  }
  render(listData);
});

$tableHeadThCreatedAt.addEventListener('click', () => {
  sortColumnFlag = 'createdAt';
  sortDirFlag = !sortDirFlag;
  sortCreatedDirFlag = !sortCreatedDirFlag;
  $tableHeadThCreatedAtArrow.classList.add('arrow--click');
  if (sortCreatedDirFlag) {
    $tableHeadThCreatedAtArrow.classList.remove('arrow--click');
  }
  render(listData);
});

$tableHeadThUpdatedAt.addEventListener('click', () => {
  sortColumnFlag = 'updatedAt';
  sortDirFlag = !sortDirFlag;
  sortUpdatedDirFlag = !sortUpdatedDirFlag;
  $tableHeadThUpdatedAtArrow.classList.add('arrow--click');
  if (sortUpdatedDirFlag) {
    $tableHeadThUpdatedAtArrow.classList.remove('arrow--click');
  }
  render(listData);
});

// Отрисовка модульного окна Добавить клиента
$addUserBtn.addEventListener('click', (e) => {
  e.preventDefault();
  $body.append($addClient);
  $body.append($blackLayer);
  $addClient.append($addClientHeader);
  $addClientHeader.append($addClientTop);
  $addClient.append($addClientBottom);
  $addClientTop.append($addClientTitle);
  $addClientTop.append($addClientId);
  $addClientHeader.append($addFloatingSurnameInput);
  $addFloatingSurnameInput.append($addClientSurnameInput);
  $addFloatingSurnameInput.append($addFloatingSurnameLabel);
  $addClientHeader.append($addFloatingNameInput);
  $addFloatingNameInput.append($addClientNameInput);
  $addFloatingNameInput.append($addFloatingNameLabel);
  $addClientHeader.append($addFloatingLastnameInput);
  $addFloatingLastnameInput.append($addClientLastnameInput);
  $addFloatingLastnameInput.append($addFloatingLastnameLabel);
  $addClientBottom.append($addClientAddContactBtnCont);
  $addClientAddContactBtnCont.append($addClientAddContactBtn);
  $addClient.append($addClientGroupBtn);
  $addClientGroupBtn.append($addClientSaveBtn);
  $addClientGroupBtn.append($addClientRemoveBtn);
  $addClient.append($closeBtn);
  $addClientSurnameInput.value = '';
  $addClientNameInput.value = '';
  $addClientLastnameInput.value = '';
});

$addClientAddContactBtn.addEventListener('click', () => {
  const $addContactInpGrp = document.createElement('div');
  const $addContactInp = document.createElement('input');
  const $addOptionTel = document.createElement('option');
  const $addOptionAdTel = document.createElement('option');
  const $addOptionMail = document.createElement('option');
  const $addOptionVk = document.createElement('option');
  const $addOptionFb = document.createElement('option');
  const $addSelectCloseBtnMod = document.createElement('div');
  const $addSelectCloseBtn = document.createElement('button');
  const $addSelect = document.createElement('select');

  $addContactInpGrp.classList.add('input-group');
  $addContactInp.classList.add('form-control', 'add-input');
  $addSelect.classList.add('form-select', 'input-group-text');
  $addSelectCloseBtnMod.classList.add('input-group-text');
  $addSelectCloseBtn.classList.add('btn-close');

  $addOptionTel.setAttribute('selected', '');
  $addOptionTel.setAttribute('value', 'tel');
  $addOptionAdTel.setAttribute('value', 'adTel');
  $addOptionMail.setAttribute('value', 'mail');
  $addOptionVk.setAttribute('value', 'vk');
  $addOptionFb.setAttribute('value', 'fb');

  $addOptionTel.textContent = 'Телефон';
  $addOptionAdTel.textContent = 'Доп. телефон';
  $addOptionMail.textContent = 'Email';
  $addOptionVk.textContent = 'Vk';
  $addOptionFb.textContent = 'Facebook';

  $addContactInp.placeholder = 'Введите данные контакта';

  $changeClientAddContactBtnCont.prepend($addContactInpGrp);
  $addClientAddContactBtnCont.prepend($addContactInpGrp);
  $addContactInpGrp.append($addSelect);
  $addContactInpGrp.append($addContactInp);
  $addContactInpGrp.append($addSelectCloseBtnMod);
  $addSelectCloseBtnMod.append($addSelectCloseBtn);
  $addSelect.append($addOptionTel);
  $addSelect.append($addOptionAdTel);
  $addSelect.append($addOptionMail);
  $addSelect.append($addOptionVk);
  $addSelect.append($addOptionFb);

  $addSelectCloseBtn.addEventListener('click', () => {
    $addContactInpGrp.remove();
  });
  $closeBtn.addEventListener('click', () => {
    $addContactInpGrp.remove();
  });
  $addClientRemoveBtn.addEventListener('click', () => {
    $addContactInpGrp.remove();
  });
  $addClientSaveBtn.addEventListener('click', () => {
    $addContactInpGrp.remove();
  });
});

$closeBtn.addEventListener('click', () => {
  $addClient.remove();
  $blackLayer.remove();
});

$addClientRemoveBtn.addEventListener('click', () => {
  $addClient.remove();
  $blackLayer.remove();
});

$addClientSaveBtn.addEventListener('click', async () => {
  // Валидация
  if ($addClientSurnameInput.value.trim() === '') {
    alert('Фамилия не введена!');
    return;
  }
  if ($addClientNameInput.value.trim() === '') {
    alert('Имя не введено!');
    return;
  }
  const response = await fetch('http://localhost:3000/api/clients', {
    method: 'POST',
    body: JSON.stringify({
      name: $addClientNameInput.value.trim(),
      surname: $addClientSurnameInput.value.trim(),
      lastName: $addClientLastnameInput.value.trim(),
      contacts: getContactsArr(),
    }),
    headers: {
      'content-type': 'application/json',
    },
  });
  const clientItem = await response.json();
  $addClient.remove();
  $blackLayer.remove();
  listData.push(clientItem);
  render(listData);
});

// Фильтр
$filterInput.addEventListener('input', () => {
  render(listData);
});
