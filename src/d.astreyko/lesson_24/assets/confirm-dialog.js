let promiseResolve;
let promiseReject;
let confirmDialogElement;

function openConfirmModal(confirmText = 'Вы уверены что хотите удалить??') {
    confirmDialogElement = document.createElement('div');
    document.body.append(confirmDialogElement);
    confirmDialogElement.outerHTML = `
<div class="dialog-container dialog-background shown">
    <div class="dialog">
        <div class="dialog-content">
            ${confirmText}
            <button onclick="declineDialog()" class="close-button">X</button>
        </div>
        <div class="dialog-actions">
            <button onclick="confirmDialog()">Yes</button>
            <button onclick="declineDialog()">No</button>
        </div>
    </div>
</div>`

    const promise = new Promise((resolve, reject) => {
        promiseResolve = resolve;
        promiseReject = reject;
    })
    return promise;
}

function confirmDialog() {
    closeDialog();
    promiseResolve(true)
}

function declineDialog() {
    closeDialog();
    promiseResolve(false)
}

function closeDialog() {
    document.body.removeChild(document.body.lastElementChild)
}