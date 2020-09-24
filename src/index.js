require('./style.css');
import $ from 'jquery';

export const htmlpack = '<div class="calculatorDv">'+
                    '<h3 id="patient-label">Patient characteristics</h3>'+
                    '<section class="calSec">'+
                        '<p id="diagnosed-mm-label" class="sectionTitle">Diagnosed with multiple myeloma</p>'+
                        '<div class="counter1-container">'+
                            '<div class="qtyminus incrementor" id="count1min" data-fieldname="patientChar"><span>-<span></div>'+
                            '<input type="text" name="patientChar" value="0" class="qty" id="patientChar" readonly autocomplete="off"/>'+
                            '<div class="qtyplus incrementor" id="count1max" data-fieldname="patientChar"><span>+<span></div>'+
                        '</div>'+
                    '</section>'+
                    '<section class="calSec">'+
                        '<p id="disease-stage-label" class="sectionTitle">ISS disease stage</p>'+
                        '<div class="counter1-container">'+
                            '<div class="qtyminus incrementor" id="count2min" data-fieldname="issDisease"><span>-<span></div>'+
                            '<input type="text" name="issDisease" value="0" class="qty" id="issDisease" readonly autocomplete="off"/>'+
                            '<div class="qtyplus incrementor" id="count2max" data-fieldname="issDisease"><span>+<span></div>'+
                        '</div>'+
                    '</section>'+
                    '<section class="calSec">'+
                        '<p id="performance-status-label" class="sectionTitle">Performance status (ECOG) at baseline</p>'+
                        '<div class="counter1-container">'+
                            '<div class="qtyminus incrementor" id="count3min" data-fieldname="ecogStatus"><span>-<span></div>'+
                            '<input type="text" name="ecogStatus" value="0" class="qty" id="ecogStatus" readonly autocomplete="off"/>'+
                            '<div class="qtyplus incrementor" id="count3max" data-fieldname="ecogStatus"><span>+<span></div>'+
                        '</div>'+
                    '</section>'+
                    '<section class="calSec">'+
                        '<p id="cytogenetics-risk-label" class="sectionTitle">Cytogenetics risk</p>'+
                        '<div class="form-check form-check-inline">'+
                          '<p id="standart-label">Standard</p>'+
                            '<label class="switch">'+
                              '<input type="checkbox" id="cytogeneticsRiskSwitch" checked>'+
                              '<span class="slider round"></span>'+
                            '</label>'+
                          '<p id="high-text-label"><strong>High</strong></p>'+
                        '</div>'+
                    '</section>'+
                    '<section class="calSec">'+
                        '<span class="footNoteEgog" id="footNote-for-cyto">EGOG=Eastern Cooperative Oncology Group.</span>'+
                    '</section>'+
                        '<h3 id="patientHistory-label">Patient History</h3>'+
                    '<section class="calSec">'+
                        '<p class="sectionTitle" id="advancedBons-label">Advanced bons disease</p>'+
                        '<div class="yesNoWrapper" id="tagAbd">'+
                            '<span class="yesButton" id="tagYesAbd">Yes</span>'+
                            '<span class="noButton" id="tagNoAbd">No</span>'+
                        '</div>'+
                    '</section>'+
                    '<section class="calSec">'+
                        '<p class="sectionTitle" id="Comorbidities-label">Comorbidities</p>'+
                        '<div class="yesNoWrapper" id="tagComo">'+
                            '<span class="yesButton" id="tagYesComo">Yes</span>'+
                            '<span class="noButton" id="tagNoComo">No</span>'+
                        '</div>'+
                    '</section>'+
                        '<h3 id="initialTreatment-label">Initial treatment and maintenance</h3>'+
                    '<section>'+
                        '<p class="sectionTitle" id="ascteligible-label">Are they eligible for ASCT?</p>'+
                        '<div class="form-check form-check-inline">'+
                            '<p id="eligible-text-label"><strong>Eligible</strong></p>'+   
                            '<label class="switch">'+
                              '<input type="checkbox" id="asctEligiblitySwitch">'+
                              '<span class="slider round"></span>'+
                            '</label>'+
                             '<p id="ineligibletext-label">Ineligible</p>'+
                        '</div>'+
                    '</section>'+
                    '</div>';

export default function blenCalc (getElement) {
    const el = document.querySelector(`#${getElement}`);
    el.append(htmlpack);
    jQuery(document).ready(function(){
    $("input.qty").val('0');

    $(".incrementor").on("mousedown", function(event){
      event.preventDefault();
    });

        $('.qtyplus').click(function(e){
            e.preventDefault();
            const fieldName = $(this).attr('data-fieldname');
            var currentVal = parseInt($('input[name='+fieldName+']').val());
            if (!isNaN(currentVal)) {
                $('input[name='+fieldName+']').val(currentVal + 1);
            } else {
                $('input[name='+fieldName+']').val(0);
            }
        });
        $(".qtyminus").click(function(e) {
            e.preventDefault();
           const fieldNameMinus = $(this).attr('data-fieldname');
            var currentVal = parseInt($('input[name='+fieldNameMinus+']').val());
            if (!isNaN(currentVal) && currentVal > 0) {
                $('input[name='+fieldNameMinus+']').val(currentVal - 1);
            } else {
                $('input[name='+fieldNameMinus+']').val(0);
            }
        });

    $('.yesNoWrapper span').click(function(e){
            e.preventDefault();
            var parentID = $(this).closest('div').attr('id');
            $("#" + parentID + " span").removeClass("yesNo_selected");
            $(this).addClass("yesNo_selected");
        });
    });
}


