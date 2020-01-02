// This file was generated by Dashcode from Apple Inc.
// DO NOT EDIT - This file is maintained automatically by Dashcode.
function setupParts() {
    if (setupParts.called) return;
    setupParts.called = true;
    CreateInfoButton('info', { frontID: 'front', foregroundStyle: 'white', backgroundStyle: 'black', onclick: 'showBack' });
    CreateGlassButton('done', { text: 'Done', onclick: 'showFront' });
    CreateShape('topRectangleShape', { rightImageWidth: 12, leftImageWidth: 12 });
    CreateText('helloText10', { text: 'label5' });
    CreateText('kern_version', { text: 'kern_version' });
    CreateShape('bottomRectangleShape', { rightImageWidth: 12, leftImageWidth: 12 });
    CreateText('kern_hostname', { text: 'kern_hostname' });
    CreateText('helloText3', { text: 'labe16' });
    CreateShape('roundedRectangleShape', { rightImageWidth: 5, leftImageWidth: 5 });
    CreateText('machdep_cpu_address_bits_physical', { text: 'machdep_cpu_address_bits_physical' });
    CreateText('kern_osversion', { text: 'kern_osversion' });
    CreateText('kern_osrevision', { text: 'kern_osrevision' });
    CreateText('kern_osrelease', { text: 'kern_osrelease' });
    CreateText('kern_ostype', { text: 'kern_ostype' });
    CreateText('helloText11', { text: 'label6' });
    CreateText('helloText9', { text: 'label4' });
    CreateText('helloText8', { text: 'label3' });
    CreateText('helloText5', { text: 'label13' });
    CreateText('helloText4', { text: 'label2' });
    CreateShape('roundedRectangleShape1', { rightImageWidth: 5, leftImageWidth: 5 });
    CreateText('helloText', { text: 'label10' });
    CreateText('helloText1', { text: 'label11' });
    CreateText('helloText6', { text: 'label1' });
    CreateText('helloText7', { text: 'label12' });
    CreateText('helloText12', { text: 'label15' });
    CreateText('helloText13', { text: 'label7' });
    CreateText('helloText14', { text: 'label8' });
    CreateText('helloText15', { text: 'label9' });
    CreateText('helloText16', { text: 'label17' });
    CreateText('hw_model', { text: 'hw_model' });
    CreateText('machdep_cpu_vendor', { text: 'machdep_cpu_vendor' });
    CreateText('machdep_cpu_brand_string', { text: 'machdep_cpu_brand_string' });
    CreateText('hw_ncpu', { text: 'hw_ncpu' });
    CreateText('hw_cpufrequency', { text: 'hw_cpufrequency' });
    CreateText('hw_busfrequency', { text: 'hw_busfrequency' });
    CreateText('hw_memsize', { text: 'hw_memsize' });
    CreateText('hw_physmem', { text: 'hw_physmem' });
    CreateText('hw_usermem', { text: 'hw_usermem' });
    CreateText('os_specific', { text: 'os_specific' });
    CreateText('helloText2', { text: 'label14' });
    CreateText('machdep_cpu_address_bits_virtual', { text: 'machdep_cpu_address_bits_virtual' });
    CreateText('hw_specific', { text: 'hw_specific' });
    CreateText('text', { text: 'SysfO' });
    CreateText('text1', { text: 'v0.1' });
}
window.addEventListener('load', setupParts, false);
