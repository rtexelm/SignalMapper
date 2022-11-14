// A class to contain and breakdown the response obj from a request

class LicenseObj {
  constructor (license) {
    this.location = license.location
    this.address = license.address
  }
}