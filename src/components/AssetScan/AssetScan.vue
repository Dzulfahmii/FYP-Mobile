<script setup>
import {
  BarcodeScanner,
  BarcodeFormat,
  LensFacing,
} from '@capacitor-mlkit/barcode-scanning';
import {kButton} from "konsta/vue";
import {ref} from "vue";
import Modal from "./Modal.vue";

const openModal = ref(false);
const scanResult = ref('');
const startScan = async () => {
  // The camera is visible behind the WebView, so that you can customize the UI in the WebView.
  // However, this means that you have to hide all elements that should not be visible.
  // You can find an example in our demo repository.
  // In this case we set a class `barcode-scanner-active`, which then contains certain CSS rules for our app.
  document.querySelector('body')?.classList.add('barcode-scanner-active');

  // Add the `barcodeScanned` listener
  const listener = await BarcodeScanner.addListener(
      'barcodeScanned',
      async result => {
        scanResult.value = result.barcode.rawValue;
        await stopScan();
      },
  );

  // Start the barcode scanner
  await BarcodeScanner.startScan();
};

const stopScan = async () => {
  // Make all elements in the WebView visible again
  document.querySelector('body')?.classList.remove('barcode-scanner-active');

  // Remove all listeners
  await BarcodeScanner.removeAllListeners();

  // Stop the barcode scanner
  openModal.value = false;
  await BarcodeScanner.stopScan();
};

const scanSingleBarcode = async () => {
  return new Promise(async resolve => {
    document.querySelector('body')?.classList.add('barcode-scanner-active');
    openModal.value = true;
    const listener = await BarcodeScanner.addListener(
        'barcodeScanned',
        async result => {
          await listener.remove();
          document
              .querySelector('body')
              ?.classList.remove('barcode-scanner-active');
          scanResult.value = result.barcode.rawValue;
          await BarcodeScanner.stopScan();
          openModal.value = false;
          resolve(result.barcode);
        },
    );

    await BarcodeScanner.startScan();
  });
};

const scan = async () => {
  const { barcodes } = await BarcodeScanner.scan({
    formats: [BarcodeFormat.QrCode],
  });
  return barcodes;
};
</script>

<template>
<!-- capacitor camera -->
  <div class="flex flex-col justify-center mx-2 gap-2">
    <k-button class="btn" @click="scanSingleBarcode">Scan Single Barcode</k-button>
    <Teleport to="body">
      <div class="barcode-scanner-modal" v-if="openModal">
        <Modal @callback="stopScan" />
      </div>
    </Teleport>
    <div>
      <p>Result: {{ scanResult }}</p>
    </div>
  </div>

</template>

<style >
body.barcode-scanner-active {
  visibility: hidden;
}

.barcode-scanner-modal {
  visibility: visible;
}
</style>