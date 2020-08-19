# About
This is an Electron GUI made for connecting to wifi networks on Linux devices, it is used in FOMOSv1-Yellow v1 - v1.2.


# Setup
Somethings may require a password but you can change that by editing the sudoers file.
```shell script
sudo visudo
``` 

```shell script
yourUserName All NOPASSWD: ALL
```

You won't need your password for any command anymore, this makes your device very insecure but you can change it so it won't ask for passwords for commands used in this project.


To setup connectToWifi-ElectronJs run:

```shell script
sh setup.sh
```

Restart your device after to make sure all changes are applied.
After that start the app by running:

```shell script
npm start
```
