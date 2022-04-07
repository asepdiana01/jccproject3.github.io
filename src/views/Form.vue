<template>
  <v-container>
    <div class="header">
        <div class="header-content">
            <div class="col-4 primary d-inline-block rounded-tl-lg"></div>
            <div class="col-4 secondary d-inline-block"></div>
            <div class="col-4 accent d-inline-block rounded-tr-lg"></div>
        </div>
    </div>
    <v-card
      class="mx-auto px-7 py-10 rounded-b-lg rounded-t-0"
      max-width="800"
      outlined
      elevation="3"
    >
      <h1 class="text-center text-headline mb-6">
        Pendataan Bansos
      </h1>
      <v-form
        ref="form"
        v-model="valid"
        @submit.prevent="submit"
        lazy-validation
      >
        <v-text-field
          v-model="nama"
          class="mb-4"
          :rules="[v => !!v || 'Nama wajib Diisi']"
          label="Nama"
          color="accent"
          placeholder="Nama Lengkap"
          persistent-placeholder
          required
        ></v-text-field>

        <v-text-field
          v-model="nik"
          name="nik"
          class="mb-4"
          :counter="16"
          @keypress="cekNumber"
          :rules="[v => !!v || 'NIK wajib diisi', rules.nik]"
          label="NIK"
          color="accent"
          type="number"
          placeholder="Contoh : 3213XXXXXXXX"
          persistent-placeholder
          required
        ></v-text-field>

        <v-text-field
          v-model="noKK"
          name="kk"
          class="mb-4"
          :counter="16"
          @keypress="cekNumber"
          :rules="[v => !!v || 'Nomor Kartu Keluarga wajib diisi', rules.kk]"
          label="Nomor Kartu Keluarga"
          color="accent"
          type="number"
          placeholder="Contoh : 3213XXXXXXXX"
          persistent-placeholder
          required
        ></v-text-field>

        <div class="row mb-4">
          <div class="col-5 col-md-3">
            <v-img 
              v-if="fotoKTPPreview"
              class="rounded-lg elevation-2"
              max-width="150"
              max-height="150"
              :src="fotoKTPPreview"
              lazy-src="https://via.placeholder.com/150x150?text=KTP"
            >
              <template v-slot:placeholder>
                <v-row
                  class="fill-height ma-0"
                  align="center"
                  justify="center"
                >
                  <v-progress-circular
                    indeterminate
                    color="grey lighten-5"
                  ></v-progress-circular>
                </v-row>
              </template>
            </v-img>
          </div>

          <div class="col-7 col-md-9">
            <v-file-input
              show-size
              ref="ktp"
              @change="cekKTP"
              v-model="fotoKTP"
              prepend-icon=""
              :rules="[v => !!v || 'Foto KTP wajib diisi', rules.photoSize, rules.photoType]"
              accept="image/png, image/jpeg, image/jpeg, image/bmp"
              placeholder="Pilih Foto"
              persistent-placeholder
              label="Foto KTP"
              color="accent"
            >
            </v-file-input>
            <div>
              <div class="text-caption text--secondary font-weight-light font-italic d-flex" v-for="(message, index) in messagesFoto" :key="`message-${index}`">
                <div>
                    <span v-for="(n, i) in (index + 1)" :key="(i + 1)">*</span>
                </div>
                <div>
                  <span>
                      &nbsp;{{ message }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="row mb-4">
          <div class="col-5 col-md-3">
            <v-img 
              class="rounded-lg elevation-2"
              max-width="150"
              max-height="150"
              load
              :src="fotoKKPreview"
              lazy-src="https://via.placeholder.com/150x150?text=KK"
            >
              <template v-slot:placeholder>
                <v-row
                  class="fill-height ma-0"
                  align="center"
                  justify="center"
                >
                  <v-progress-circular
                    indeterminate
                    color="grey lighten-5"
                  ></v-progress-circular>
                </v-row>
              </template>
            </v-img>
          </div>

          <div class="col-7 col-md-9">
            <v-file-input
              show-size
              ref="kk"
              @change="cekKK"
              v-model="fotoKK"
              prepend-icon=""
              :rules="[v => !!v || 'Foto KK wajib diisi', rules.photoSize, rules.photoType]"
              accept="image/png, image/jpeg, image/jpeg, image/bmp"
              placeholder="Pilih Foto"
              persistent-placeholder
              label="Foto Kartu Keluarga"
              color="accent"
            >
            </v-file-input>
            <div>
              <div class="text-caption text--secondary font-weight-light font-italic d-flex" v-for="(message, index) in messagesFoto" :key="`message-${index}`">
                <div>
                    <span v-for="(n, i) in (index + 1)" :key="(i + 1)">*</span>
                </div>
                <div>
                  <span>
                      &nbsp;{{ message }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        
        <div class="row mb-4">
          <v-text-field
            v-model="umur"
            class="col-12 col-sm-6"
            :rules="[v => !!v || 'Umur wajib diisi', rules.umur]"
            label="Umur"
            type="number"
            color="accent"
            placeholder="Min. 25"
            persistent-placeholder
            required
          ></v-text-field>

          <div class="col-12 col-sm-6">
            <div class="label-radio">
              <span>Jenis Kelamin</span>
            </div>
            <v-radio-group
              v-model="jenisKelamin"
              mandatory
              row
              hide-details
              class="ma-0 ma-mb-0 mt-n3"
            >
              <v-radio
                label="Laki-laki"
                value="Laki-laki"
                color="accent"
              ></v-radio>
              <v-radio
                label="Perempuan"
                value="Perempuan"
                color="accent"
              ></v-radio>
            </v-radio-group>
          </div>
        </div>

        <v-textarea
          v-model="alamat"
          class="mb-4"
          :rules="[v => !!v || 'Alamat wajib diisi', rules.alamat]"
          :counter="255"
          label="Alamat"
          color="accent"
          placeholder="Alamat Lengkap"
          persistent-placeholder
          rows="1"
          no-resize
          auto-grow
        ></v-textarea>

        
        <div class="row mb-4 ">
          <v-text-field
            v-model="RT"
            @keypress="cekNumber"
            class="col-6"
            :rules="[v => !!v || 'RT wajib Diisi']"
            label="RT"
            type="number"
            color="accent"
            placeholder="XXX"
            persistent-placeholder
            required
          ></v-text-field>
          <v-text-field
            v-model="RW"
            @keypress="cekNumber"
            class="col-6"
            :rules="[v => !!v || 'RW wajib Diisi']"
            label="RW"
            type="number"
            color="accent"
            placeholder="XXX"
            persistent-placeholder
            required
          ></v-text-field>
        </div>
        
        <div class="row mb-4 ">
          <v-text-field
            v-model="PengSebelumPandemi"
            @keypress="cekNumber"
            class="col-12 col-sm-6 mb-4 mb-sm-0"
            :rules="[ v => !!v || 'Penghasilan Sebelum Pandemi wajib Diisi']"
            counter
            label="Penghasilan Sebelum Pandemi"
            color="accent"
            type="number"
            prefix="Rp."
            placeholder="XXXXXXXXX"
            persistent-placeholder
            required
          ></v-text-field>

          <v-text-field
            v-model="PengSetelahPandemi"
            @keypress="cekNumber"
            class="col-12 col-sm-6"
            :rules="[ v => !!v || 'Penghasilan Setelah Pandemi wajib Diisi']"
            counter
            label="Penghasilan Setelah Pandemi"
            color="accent"
            type="number"
            prefix="Rp."
            placeholder="XXXXXXXXX"
            persistent-placeholder
            required
          ></v-text-field>
        </div>

        <div class="mb-4">
          <v-select
            v-model="alasanTerpilih"
            :items="alasanList"
            :rules="[v => !!v || 'Alasan wajib diisi']"
            label="Alasan membutuhkan bantuan"
            color="accent"
            placeholder="Pilih salah satu"
            :menu-props="{ overflowX: true }"
            attach
            persistent-placeholder
            auto
            required
          ></v-select>       

          <v-scale-transition>
            <v-text-field
                v-model="alasanLainnya"
                v-if="alasanTerpilih == 'Lainnya'"
                class="mt-n3"
                :rules="[ v => !!v || 'Alasan wajib diisi']"
                color="accent"
                placeholder="Tulis alasan disini"
                persistent-placeholder
                required
            ></v-text-field>
          </v-scale-transition>
        </div>

        <v-checkbox
          v-model="check"
          class="mb-6"
          id="agreement"
          :rules="[v => !!v || 'Harap setujui untuk melanjutkan!']"
          color="accent"
          :ripple="false"
          required
        >
          <template v-slot:label>
              Saya menyatakan bahwa data yang diisikan adalah benar dan siap mempertanggungjawabkan apabila ditemukan ketidaksesuaian dalam data tersebut.
          </template>
        </v-checkbox>

        <div v-show="!valid" class="error--text my-2 text-subtitle">
          <span>
            Mohon Pastikan Data telah terisi seluruhnya!
          </span>
        </div>
        <div class="text-center text-md-left">
          <v-btn
            :disabled="!valid"
            :block="$vuetify.breakpoint.mobile"
            :loading="loadingButton"
            elevation="3"
            color="success"
            class="mr-4 rounded-pill px-16 py-6 px-md-14"
            type="submit"
          >
            Simpan
          </v-btn>
        </div>
      </v-form>
    </v-card>
  </v-container>
</template>

<script>
  import { mapActions } from 'vuex'
  export default {
    data: () => ({
      valid: true,
      loadingButton: false,
      nama: '',
      nik: '',
      noKK: '',
      fotoKTP: null,
      fotoKTPPreview: 'https://via.placeholder.com/150x150?text=KTP',
      fotoKKPreview: 'https://via.placeholder.com/150x150?text=KK',
      fotoKK: null,
      umur: '',
      alamat: '',
      jenisKelamin: '',
      RT: '',
      RW: '',
      PengSebelumPandemi: '',
      PengSetelahPandemi: '',
      alasanTerpilih: null,
      alasanLainnya: '',
      alasanList: [
        'Kehilangan Pekerjaan',
        'Kepala keluarga terdampak atau korban Covid',
        'Tergolong fakir/miskin semenjak sebelum Covid',
        'Lainnya',
      ],
      check: false,
      messagesFoto: ['Foto tidak boleh lebih dari 2MB', 'Format file PNG/JPG/JPEG/BMP'],
      rules: {
        photoSize : v => !v || v.size <= 2000000 || 'Ukuran file terlalu besar',
        photoType : v => !v || ['image/png', 'image/jpeg', 'image/jpeg', 'image/bmp'].indexOf(v.type) >= 0 || 'Format file salah',
        umur : v => (v && v >= 25) || 'Umur harus 25 atau keatas',
        nik : v => (v && v.length == 16) || 'NIK harus berjumlah 16 digit',
        kk : v => (v && v.length == 16) || 'Nomor KK harus berjumlah 16 digit',
        alamat : v => (v && v.length <= 255) || 'Alamat tidak boleh lebih dari 255 karakter',
      },
    }),
    computed:{
      statusKTP(){
        return this.$refs.ktp
      },
      statusKK(){
        return this.$refs.kk
      },
      inputedData(){
          return {
            nama                : this.nama,
            nik                 : this.nik,
            noKK                : this.noKK,
            fotoKTP             : this.fotoKTP,
            fotoKK              : this.fotoKK,
            umur                : this.umur,
            alamat              : this.alamat,
            jenisKelamin        : this.jenisKelamin,
            RT                  : this.RT,
            RW                  : this.RW,
            PengSebelumPandemi  : this.PengSebelumPandemi,
            PengSetelahPandemi  : this.PengSetelahPandemi,
            alasan              : this.alasan
          }
      },
      alasan(){
        if(this.alasanTerpilih && this.alasanTerpilih == "Lainnya"){
          return this.alasanLainnya
        }
        return this.alasanTerpilih
      },
    },
    methods: {
      ...mapActions({
        "setDialogStatus" : "dialog/setStatus"
      }),
      sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
      },
      randomNumber(min, max) {
        return Math.random() * (max - min) + min
      },
      async submit() {
        if(this.$refs.form.validate()){
            let time = Math.floor(this.randomNumber(1400,1600))
            console.log({
              responseTime : time,
              data :this.inputedData
            });
            this.loadingButton = true
            await this.sleep(time)
            if(time >= 1500){
              this.loadingButton = false
              this.setDialogStatus(true) 
            }else{
              this.loadingButton = false
              this.$router.push({
                name: "Info",
                params: {
                  savedForm: true,
                },
              });
            }
        }
      },
      cekKTP(){
        if(this.statusKTP.validate()){
          const reader = new FileReader()
          reader.onload = e => {
            this.fotoKTPPreview = e.target.result
          };
          reader.readAsDataURL(this.fotoKTP)
        }else{
          this.fotoKTPPreview = "https://via.placeholder.com/150x150?text=KK"
        }
      },
      cekKK(){
        if(this.statusKK.validate()){
          const reader = new FileReader()
          reader.onload = e => {
            this.fotoKKPreview = e.target.result
          };
          reader.readAsDataURL(this.fotoKK)
        }else{
          this.fotoKKPreview = "https://via.placeholder.com/150x150?text=KK"
        }
      },
      cekNumber(event){
        if (event.which != 8 && event.which != 0 && event.which < 48 || event.which > 57){
            event.preventDefault()
        }
        if(event.target.name == "nik" || event.target.name == "kk"){
          if(event.target.value.length >= 16){
              event.preventDefault()
          }
        }
      }
    },
    beforeMount(){
      document.title = this.$route.meta.title
    }
  }
</script>